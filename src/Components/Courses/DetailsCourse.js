import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();
// this is each course dymanic route, this page contains all the info about that course which courses the user clicked and also here is a button for access the premuim content
const DetailsCourse = () => {
  const courses = useLoaderData();
  const { id, picture, name, description, phone, email, price } = courses;
  return (
    <div className="  bg-gray-100  p-4 py-16">
      <div className="md:w-2/5 mx-auto  shadow-2xl p-5">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button
              onClick={toPdf}
              className=" bg-primary hover:bg-transparent hover:text-primary hover:ease-in duration-200 text-white  shadow-xl px-3 py-2 my-2 font-bold "
            >
              Download Pdf
            </button>
          )}
        </Pdf>
        <div ref={ref}>
          <h2 className="text-4xl font-bold my-3 ">{name}</h2>
          <img src={picture} alt="" className="h-full py-3" />
          <div>
            <p className="font-semibold">
              Details About Course :{" "}
              <span className="font-light">{description}</span>
            </p>
            <p className="font-semibold">
              Price : <span className="font-light">$ {price}</span>
            </p>
            <p className="font-semibold">
              Email : <span className="font-light">{email}</span>
            </p>
            <p className="font-semibold">
              Phone : <span className="font-light">$ {phone}</span>
            </p>
          </div>
        </div>

        <Link to="/courses">
          <button className=" bg-primary hover:bg-transparent hover:text-primary hover:ease-in duration-200 text-white  shadow-xl px-3 py-2 my-2 font-bold ">
            Back to Course
          </button>
        </Link>

        <Link to={`/checkout/${id}`}>
          <button className=" bg-primary hover:bg-transparent hover:text-primary hover:ease-in duration-200 text-white  shadow-xl px-3 py-2 my-2 font-bold md:ml-3">
            Get premium access
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DetailsCourse;
