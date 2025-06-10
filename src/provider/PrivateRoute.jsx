import React, { use } from "react";
import AuthContext from "./AuthContext";
import { Navigate, useLocation } from "react-router";
import LoadingThreeDotsJumping from "../Components/LoadingThreeDotsJumping";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) return <LoadingThreeDotsJumping></LoadingThreeDotsJumping>;

  if (user) return children;

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
