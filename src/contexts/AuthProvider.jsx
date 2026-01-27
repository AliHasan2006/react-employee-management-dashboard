import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authUserData, setAuthUserData] = useState({});

  useEffect(() => {
    setLocalStorage(); // ✅ now safe
    const { employeesData, adminData } = getLocalStorage();
    setAuthUserData({ employeesData, adminData });
  }, []);

  return (
    <AuthContext.Provider value={authUserData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
