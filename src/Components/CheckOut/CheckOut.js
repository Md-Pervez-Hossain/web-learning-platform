import React from "react";
import { useLoaderData } from "react-router-dom";
import Form from "../Form/Form";

const CheckOut = () => {
  const course = useLoaderData();
  const { id, picture, name, description, phone, email, price } = course;
  return (
    <div className=" bg-gray-100  py-16 px-4">
      <div className="md:w-2/5 mx-auto ">
        <div>
          <img src={picture} alt="" />
          <h2 className="text-5xl font-bold my-4 ">{name}</h2>
          <p className="font-bold mb-2">
            Id: <span>{id}</span>
          </p>
          <p className="font-bold">
            For Premium Access You need to pay :
            <span className="text-primary "> $ {price}</span>
          </p>
        </div>
        <div className="md:pt-32 pt-16">
          <Form></Form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
