import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);

  const logout = () => {
    navigate("/login");
  };

  const value = {
    isAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
