import React from "react";
import DisplayFAQ from "./DisplayFAQ";
import { QuestionAndAnswer } from "./FaqApi";
//
const Faq = () => {
  return (
    <div className=" bg-gray-100 py-32 px-4">
      <div className="md:w-9/12 mx-auto">
        <div>
          {QuestionAndAnswer.map((FAQ) => (
            <DisplayFAQ key={FAQ.id} FAQ={FAQ}></DisplayFAQ>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
