import { createContext, useState } from "react";

// 1. Create context
export const AuthContext = createContext();

// 2. Provider component to manage state
export const AuthContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to handle login
  const login = async (email, password) => {
    setLoading(true); // Show loading state while making the request
    setError(null); // Clear previous errors
    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setToken(data.token); // Store token from the API
        setIsAuth(true); // Set authentication to true
      } else {
        setError(data.error); // Handle error message
      }
    } catch (err) {
      setError("Something went wrong!");
    } finally {
      setLoading(false); // End loading state
    }
  };

  // Function to handle logout
  const logout = () => {
    setIsAuth(false); // Reset authentication state
    setToken(""); // Clear token
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, token, loading, error, login, logout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
