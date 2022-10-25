import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { user, createUser, userDisplayNameAndPhotourl } =
    useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    if (username === "") {
      toast.warning("User Name is required");
      return;
    }
    if (photoURL === "") {
      toast.warning("Photo URL is required");
      return;
    }
    if (email === "") {
      toast.warning("Email is required");
      return;
    }
    if (password === "") {
      toast.warning("password is required");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        userDisplayNameAndPhotourl(username, photoURL)
          .then(() => {})
          .catch(() => {});
        toast.success("User Succesfully Log In", { autoClose: 500 });
        form.reset();
        console.log(user);
      })
      .catch((error) => {
        toast.warn(error.message, { autoClose: 500 });
      });
  };
  return (
    <div className="bg-gray-100 h-screen py-16 p-4">
      <div className=" md:w-2/5 mx-auto p-16 space-y-3 rounded-xl shadow-2xl">
        <h1 className="text-2xl font-bold text-center">Please Register</h1>
        <form
          onSubmit={handleRegister}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-400">
              User Name
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              required
              className="w-full border-red-500 px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-400">
              Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              id="photoURL"
              placeholder="photoURL"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <button className="block w-full p-3 text-center   bg-white shadow-lg  rounded-md">
            Register
          </button>
        </form>

        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
          Already, have an account?
          <Link
            rel="noopener noreferrer"
            to="/login"
            className="underline dark:text-gray-100"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
