import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

const Login = () => {
  const [email, setEmail] = useState(""); // For handling the email input
  const [password, setPassword] = useState(""); // For handling the password input
  const { login, loading, error } = useContext(AuthContext); // Access login function and state from context

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password); // Trigger login with entered email and password
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Handle email input change
          data-testid="email-input"
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Handle password input change
          data-testid="password-input"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Show error message if login fails */}
    </div>
  );
};

export default Login;
