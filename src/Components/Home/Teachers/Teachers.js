import React from "react";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const Teachers = () => {
  return (
    <div className="md:w-9/12 mx-auto p-4  pb-10">
      <div className=" md:py-16 text-center ">
        <h2 className="md:text-7xl text-4xl font-bold text-primary pb-5  md:pb-10">
          Our Teacher
        </h2>
        <p className="md:px-32 mb-5">
          Teaching is certainly the most commonly known career path for students
          earning a degree in education, and it's a great option if you like
          working with children or adults in a classroom setting. Teachers
          prepare and educate their students for the world.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="bg-gray-100 shadow-2xl rounded-md  ">
          <img
            className=""
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
          <div className="p-3">
            <h2 className="text-xl font-semibold">Barbara Harbach CoFounder</h2>
            <p> Design and User Experience</p>
            <p>Design Amalgamation</p>
            <div className="flex gap-3 my-3 cursor-pointer">
              <FaFacebook className=" hover:text-primary   shadow-xl"></FaFacebook>
              <FaGoogle className="hover:text-primary transition-shadow"></FaGoogle>
              <FaTwitter className="hover:text-primary transition-shadow"></FaTwitter>
              <FaInstagram className="hover:text-primary transition-shadow"></FaInstagram>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 shadow-2xl rounded-md  ">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
          <div className="p-3">
            <h2 className="text-xl font-semibold">Debora Rhode</h2>
            <p> Software Engenure</p>
            <p>Chief of Technology, Apple Inc.</p>
            <div className="flex gap-3 my-3 cursor-pointer">
              <FaFacebook className="hover:text-primary transition-shadow"></FaFacebook>
              <FaGoogle className="hover:text-primary transition-shadow"></FaGoogle>
              <FaTwitter className="hover:text-primary transition-shadow"></FaTwitter>
              <FaInstagram className="hover:text-primary transition-shadow"></FaInstagram>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 shadow-2xl rounded-md ">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            alt=""
          />
          <div className="p-3">
            <h2 className="text-xl font-semibold">Elena Cagan</h2>
            <p> Front end Developer</p>
            <p>Evangelist, Grammarly Inc.</p>
            <div className="flex gap-3 my-3 cursor-pointer">
              <FaFacebook className="hover:text-primary transition-shadow"></FaFacebook>
              <FaGoogle className="hover:text-primary transition-shadow"></FaGoogle>
              <FaTwitter className="hover:text-primary transition-shadow"></FaTwitter>
              <FaInstagram className="hover:text-primary transition-shadow"></FaInstagram>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
