import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const DetailsCourse = () => {
  const courses = useLoaderData();
  const { id, picture, name, description, phone, email, price } = courses;
  return (
    <div className="w-2/5 mx-auto bg-gray-100 p-5 shadow-2xl  my-16">
      <img src={picture} alt="" className="h-full" />
      <div>
        <h2 className="text-4xl font-bold my-3 ">{name}</h2>
        <p>{description}</p>
        <p className="font-semibold">
          Price : <span className="font-light">$ {price}</span>
        </p>
        <p className="font-semibold">
          Email : <span className="font-light">{email}</span>
        </p>
        <p className="font-semibold">
          Phone : <span className="font-light">$ {phone}</span>
        </p>
        <Link to="/courses">
          <button className="bg-white shadow-xl px-3 py-2 my-2 font-bold">
            Back to Course
          </button>
        </Link>
        <Link to={`/checkout/${id}`}>
          <button className="bg-white shadow-xl px-3 py-2 my-2 font-bold ml-2">
            Get premium access
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DetailsCourse;
