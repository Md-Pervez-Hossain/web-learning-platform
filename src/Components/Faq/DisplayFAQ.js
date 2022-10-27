import React from "react";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const DisplayFAQ = ({ FAQ }) => {
  const [toggle, setToggle] = useState(false);
  const { question, answer } = FAQ;
  return (
    <div className="md:w-9/12 mx-auto">
      <div
        onClick={() => setToggle(!toggle)}
        className="flex items-center justify-between hover:bg-gray-100 hover:text-black hover:ease-in duration-200  bg-primary text-white p-3 shadow-lg mb-5"
      >
        <h2 className="text-xl font-bold">{question}</h2>
        {toggle ? <FaMinus></FaMinus> : <FaPlus></FaPlus>}
      </div>
      <p className="mb-3">{toggle && answer}</p>
    </div>
  );
};

export default DisplayFAQ;
