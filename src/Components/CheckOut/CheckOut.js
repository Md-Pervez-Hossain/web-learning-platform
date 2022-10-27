import React from "react";
import { useLoaderData } from "react-router-dom";
import Form from "../Form/Form";

const CheckOut = () => {
  const course = useLoaderData();
  const { id, picture, name, price } = course;
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
          <div className="mt-5">
            <h2 className="text-2xl font-bold my-4 text-center">We Support</h2>
            <img
              className="mt-2"
              src="https://t4.ftcdn.net/jpg/04/73/84/61/360_F_473846184_0k637f6855ZJqaulKqAmgJTEVGVibR1P.jpg"
              alt=""
            />
          </div>
        </div>
        <div className=" pt-10">
          <h2 className="text-2xl font-bold my-4 ">Fill this out for order</h2>
          <Form></Form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
