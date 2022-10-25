import React from "react";

const Teachers = () => {
  return (
    <div className="md:w-9/12 mx-auto p-4  pb-10">
      <h2 className="text-7xl font-bold py-16 text-center">Our Teacher</h2>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="bg-gray-100 shadow-2xl rounded-md ">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
          <div className="p-3">
            <h2 className="text-xl font-semibold">Barbara Harbach CoFounder</h2>
            <p> Design and User Experience</p>
            <p>Design Amalgamation</p>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Teachers;
