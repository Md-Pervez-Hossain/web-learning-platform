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
    <div className=" bg-gray-100 py-4 shadow-xl sticky top-0 ">
      <div className=" w-9/12 mx-auto flex justify-between text-xl font-semibold ">
        <div>
          <h2>Web Tech</h2>
        </div>
        <div className="flex gap-5 menu menu-vertical lg:menu-horizontal">
          <Link to="/home">Home</Link>

          <Link to="/blog">Blog</Link>
          {user?.uid ? (
            <>
              <Link to="/courses">Course</Link>
              <Link to="/home" onClick={handleLogout}>
                Logout
              </Link>

              <h2>{user.displayName}</h2>
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
