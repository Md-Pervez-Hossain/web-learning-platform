import React from "react";
import { Link } from "react-router-dom";

// here i display all course at a time
const DisplayCourses = ({ course }) => {
  const { id, name, picture } = course;
  return (
    <div className="bg-gray-100 shadow-xl transform ">
      <img src={picture} alt="" className="h-44 " />
      <div className="p-3">
        <h2 className="text-2xl font-bold ">{name}</h2>
        <Link to={`/courses/${id}`}>
          <button className="bg-primary text-white hover:bg-transparent hover:text-primary hover:ease-in duration-200  shadow-xl px-3 py-2 my-2 font-bold">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DisplayCourses;
