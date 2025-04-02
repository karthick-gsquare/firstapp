import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router";

function ClientPublic({ children }) {
  const { isAuth } = useAuth();
  console.log("client public", isAuth);

  return isAuth ? <Navigate to="/" /> : children;;
}

export default ClientPublic;
