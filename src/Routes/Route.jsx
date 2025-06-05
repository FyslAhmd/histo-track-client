import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllArtifacts from "../Pages/AllArtifacts";
import AddArtifacts from "../Pages/AddArtifacts";
import MyArtifacts from "../Pages/MyArtifacts";
import LikedArtifacts from "../Pages/LikedArtifacts";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allArtifacts",
        Component: AllArtifacts,
      },
      {
        path: "/addArtifacts",
        Component: AddArtifacts,
      },
      {
        path: "/myArtifacts",
        Component: MyArtifacts,
      },
      {
        path: "/likedArtifacts",
        Component: LikedArtifacts,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Error page</h1>,
  },
]);
