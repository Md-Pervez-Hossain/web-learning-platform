import React from "react";
import app from "../../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userDisplayNameAndPhotourl = (username, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: photoURL,
    });
  };

  const userLogout = () => {
    setLoading(true);
    return signOut(auth);
  };
  const userSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const LogInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };
  const resetemail = (userEmail) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, userEmail);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (createUser) => {
      setUser(createUser);
      setLoading(false);
    });
    return () => unSubscribe;
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    userLogout,
    userDisplayNameAndPhotourl,
    userSignIn,
    LogInWithGoogle,
    logInWithGithub,
    resetemail,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
