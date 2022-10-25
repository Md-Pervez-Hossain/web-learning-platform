import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Header = () => {
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
      <div className=" w-9/12 mx-auto flex justify-between text-xl font-semibold ">
        <Link to="/">Web Tech</Link>
        <div className="flex gap-5 menu menu-vertical lg:menu-horizontal">
          <Link to="/home">Home</Link>

          <Link to="/blog">Blog</Link>
          <Link to="/courses">Courses</Link>
          {user?.uid ? (
            <>
              <Link to="/home" onClick={handleLogout}>
                Logout
              </Link>

              <img
                src={user.photoURL}
                alt=""
                width="30px"
                className="rounded"
              />
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="register">Register</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
