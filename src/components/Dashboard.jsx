import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

const Dashboard = () => {
  const { token, logout } = useContext(AuthContext); // Access token and logout function from context

  return (
    <div>
      <h3>Token: {token}</h3> {/* Display token */}
      <button onClick={logout} data-testid="logout-button">LOGOUT</button> {/* Logout button */}
    </div>
  );
};

export default Dashboard;
