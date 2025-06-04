import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer";

const Root = () => {
  const navigation = useNavigation();
  return (
    <div className="w-11/12 mx-auto">
      <Navbar></Navbar>
      {navigation.state === "loading" && (
        <div className="fixed inset-0 z-50 bg-base-100 bg-opacity-60 flex items-center justify-center">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      )}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
