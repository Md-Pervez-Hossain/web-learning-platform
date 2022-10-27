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

// create authContext
export const AuthContext = createContext();
// create google provider
const googleProvider = new GoogleAuthProvider();
//create github provider
const gitHubProvider = new GithubAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // register user by email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // create user name and photo url
  const userDisplayNameAndPhotourl = (username, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: photoURL,
    });
  };
  // user log out
  const userLogout = () => {
    setLoading(true);
    return signOut(auth);
  };
  // make user sign in
  const userSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //  user log in with goggle
  const LogInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // user log in with github
  const logInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };
  // recevery email
  const resetpassword = (userEmail) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, userEmail);
  };
  // catch the user
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
    resetpassword,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
