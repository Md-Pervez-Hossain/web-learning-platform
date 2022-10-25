import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const course = useLoaderData();
  const { id, picture, name, description, phone, email, price } = course;
  return (
    <div className="md:w-2/5 mx-auto text-center my-16">
      <img src={picture} alt="" />
      <h2 className="text-5xl font-bold my-4 ">{name}</h2>
      <p>{id}</p>
    </div>
  );
};

export default CheckOut;
