import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-gray-100 h-screen pt-16 p-4">
      <div className=" md:w-2/5 mx-auto p-16 space-y-3 rounded-xl shadow-2xl">
        <h1 className="text-2xl font-bold text-center">Please Register</h1>
        <form
          novalidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label for="username" className="block dark:text-gray-400">
              User Name
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="username" className="block dark:text-gray-400">
              Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              id="username"
              placeholder="photoURL"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="username" className="block dark:text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="photoURL"
              id="username"
              placeholder="email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="password" className="block dark:text-gray-400">
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
            href="#"
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
