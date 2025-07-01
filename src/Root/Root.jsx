import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer";
import LoadingThreeDotsJumping from "../Components/LoadingThreeDotsJumping";

const Root = () => {
  const navigation = useNavigation();
  return (
    <div className="px-1 mx-auto">
      <Navbar></Navbar>
      {navigation.state === "loading" && (
        <LoadingThreeDotsJumping></LoadingThreeDotsJumping>
      )}
      <div className="md:max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
