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
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userDisplayNameAndPhotourl = (username, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: photoURL,
    });
  };

  const userLogout = () => {
    return signOut(auth);
  };
  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const LogInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const logInWithGithub = () => {
    return signInWithPopup(auth, gitHubProvider);
  };
  const resetemail = (userEmail) => {
    return sendPasswordResetEmail(auth, userEmail);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (createUser) => {
      setUser(createUser);
    });
    return () => unSubscribe;
  }, []);
  const authInfo = {
    user,
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
