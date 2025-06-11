import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer";
import LoadingThreeDotsJumping from "../Components/LoadingThreeDotsJumping";

const Root = () => {
  const navigation = useNavigation();
  return (
    <div className="px-1 md:w-11/12 mx-auto">
      <Navbar></Navbar>
      {navigation.state === "loading" && (
        <LoadingThreeDotsJumping></LoadingThreeDotsJumping>
      )}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
