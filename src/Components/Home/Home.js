import React from "react";
import { Link } from "react-router-dom";
import Teachers from "./Teachers/Teachers";

const Home = () => {
  return (
    <div className="bg-gray-100 mx-auto">
      <div className="  md:w-9/12 mx-auto pt-10 pb-10 md:pt-32 md:pb-16">
        <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
          <img
            src="https://identyti.com/static/falcon/img/stock/page/kritikaraina/132413_jpg%20(1).jpg"
            className=" h-72 rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-4xl md:text-7xl font-regular">
              Future of <br />
              Technology
              <br />
              <span className="text-4xl md:text-7xl font-bold text-primary ">
                Education.
              </span>
            </h1>
            <p className="py-6">
              The most advanced education framework for Web. You get a website
              with service workers which works both online and offline. The best
              part it comes with inbuilt installable app.
            </p>
            <Link to="/courses">
              <button className="btn btn-primary hover:bg-transparent hover:text-primary">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="pb-10">
        <Teachers></Teachers>
      </div>
    </div>
  );
};

export default Home;
