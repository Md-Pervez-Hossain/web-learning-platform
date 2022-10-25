import React from "react";
import app from "../../Firebase/Firebase.config";
import { getAuth } from "firebase/auth";
import { createContext } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const authInfo = {};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
