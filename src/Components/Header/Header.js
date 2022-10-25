import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" py-4 shadow-xl">
      <div className=" w-9/12 mx-auto flex justify-between text-xl font-semibold ">
        <div>
          <h2>Web Tech</h2>
        </div>
        <div className="flex gap-5">
          <Link to="/home">Home</Link>
          <Link to="/courses">Course</Link>
          <Link to="/blog">Blog</Link>
          <Link to="login">Login</Link>
          <Link to="register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
