import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";
import logo from "../Assets/logo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [mood, setMood] = useState(false);
  const [open, setOpen] = useState(false);
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
      <div className=" md:w-9/12 mx-auto flex justify-between text-xl font-bold p-4">
        <div>
          <Link to="/">
            <img src={logo} alt="" className="w-44" />
          </Link>
        </div>

        <div>
          <div>
            {open ? (
              <XMarkIcon
                onClick={() => setOpen(!open)}
                className="h-6 w-6 text-wite md:hidden duration-700 ease-in-out"
              />
            ) : (
              <Bars3Icon
                onClick={() => setOpen(!open)}
                className="h-6 w-6 text-wite md:hidden duration-700 ease-in-out"
              />
            )}
          </div>

          <div
            className={`bg-primary w-full left-0  duration-700 ease-in-out flex md:gap-8  absolute md:static flex-col md:flex-row ${
              open ? "top-24" : "top-[-520px]"
            }`}
          >
            <Link to="/home" className="  p-3 ">
              Home
            </Link>
            <Link to="/courses" className=" p-3">
              Courses
            </Link>
            <Link to="/blog" className=" p-3">
              Blog
            </Link>
            <Link to="/faq" className=" p-3">
              Faq
            </Link>
            <div>
              <button
                className="bg-gray-100 text-primary rounded-lg p-3 ml-3 "
                onClick={() => setMood(!mood)}
              >
                {mood ? "Light Mood" : "Dark Mood"}
              </button>
            </div>
            {user?.uid ? (
              <>
                <Link to="/home" onClick={handleLogout} className=" p-3">
                  Logout
                </Link>

                <img
                  src={user.photoURL}
                  alt=""
                  width="50px"
                  title={user.displayName}
                  className=" rounded hover:bg-white hover:text-primary hover:ease-in duration-200 hover:rounded-lg p-3"
                />
              </>
            ) : (
              <>
                <Link to="/login" className=" p-3">
                  Login
                </Link>
                <Link to="register" className=" p-3">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
