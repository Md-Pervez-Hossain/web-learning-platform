import React from "react";
import { Outlet } from "react-router-dom";
import ReactTopdf from "../../ReactToPdf/ReactTopdf";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      {/* <ReactTopdf></ReactTopdf> */}
      <Footer></Footer>
    </div>
  );
};

export default Main;
