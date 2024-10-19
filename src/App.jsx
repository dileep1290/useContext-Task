import React, { useContext } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { AuthContext } from "./context/AuthContextProvider";

const App = () => {
  const { isAuth } = useContext(AuthContext); // Get isAuth state from context

  return (
    <div>
      {isAuth ? <Dashboard /> : <Login />} {/* Conditionally render based on auth state */}
    </div>
  );
};

export default App;
