import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import DisplayCourses from "./DisplayCourses";

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);

  return (
    <div className="md:w-9/12 mx-auto grid md:grid-cols-3 gap-5 my-16 p-4 ">
      <div className="md:col-span-1">
        <h2 className="text-3xl font-bold bg-primary text-white p-3 shadow-2xl  mb-3  ">
          Avaiable Courses
        </h2>
        {courses.map((item) => {
          return (
            <div key={item.id}>
              <Link to={`/courses/${item.id}`}>
                <h2 className="text-2xl font-bold hover:text-primary ease-in duration-200 py-5 cursor-pointer">
                  {item.name}
                </h2>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="grid col-span-2 md:grid-cols-3 gap-5 ">
        {courses.map((course) => (
          <DisplayCourses key={course.id} course={course}></DisplayCourses>
        ))}
      </div>
    </div>
  );
};

export default Courses;
