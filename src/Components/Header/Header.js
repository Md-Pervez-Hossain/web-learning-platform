import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";
import logo from "../Assets/logo.png";

const Header = () => {
  const [mood, setMood] = useState(false);
  const { user, userLogout } = useContext(AuthContext);
  const handleLogout = () => {
    userLogout()
      .then(() => {
        toast.success("SuccesFully logged Out", { autoClose: 500 });
      })
      .catch((error) => {
        toast.warning(error.message, { autoClose: 500 });
      });
  };

  return (
    <div className=" bg-primary text-white py-4 shadow-xl  ">
      <div className=" w-9/12 mx-auto flex justify-between text-xl font-bold ">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="" className="w-14" />
          </Link>
          <Link to="/" className="p-3 font-bold">
            Web Tech
          </Link>
        </div>
        <div className="flex gap-8 menu menu-vertical lg:menu-horizontal ">
          <Link
            to="/home"
            className=" hover:bg-white hover:text-primary hover:ease-in duration-200 rounded-lg p-2"
          >
            Home
          </Link>
          <Link
            to="/courses"
            className=" hover:bg-white hover:text-primary hover:ease-in duration-200 rounded-lg p-2"
          >
            Courses
          </Link>
          <Link
            to="/blog"
            className=" hover:bg-white hover:text-primary hover:ease-in duration-200 rounded-lg p-2"
          >
            Blog
          </Link>
          <Link
            to="/faq"
            className=" hover:bg-white hover:text-primary hover:ease-in duration-200 rounded-lg p-2"
          >
            Faq
          </Link>
          <div>
            <button
              className="bg-gray-100 text-primary rounded-lg p-3 "
              onClick={() => setMood(!mood)}
            >
              {mood ? "Light" : "Dark"}
            </button>
          </div>
          {user?.uid ? (
            <>
              <Link
                to="/home"
                onClick={handleLogout}
                className=" hover:bg-white hover:text-primary hover:ease-in duration-200 rounded-lg p-2"
              >
                Logout
              </Link>

              <img
                src={user.photoURL}
                alt=""
                width="50px"
                title={user.displayName}
                className=" rounded hover:bg-white hover:text-primary hover:ease-in duration-200 hover:rounded-lg p-2"
              />
            </>
          ) : (
            <>
              <Link
                to="/login"
                className=" hover:bg-white hover:text-primary hover:ease-in duration-200 rounded-lg p-2"
              >
                Login
              </Link>
              <Link
                to="register"
                className=" hover:bg-white hover:text-primary hover:ease-in duration-200 rounded-lg p-2"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
