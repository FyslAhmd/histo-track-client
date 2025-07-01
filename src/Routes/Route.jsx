import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllArtifacts from "../Pages/AllArtifacts";
import MyArtifacts from "../Pages/MyArtifacts";
import LoadingThreeDotsJumping from "../Components/LoadingThreeDotsJumping";
import ArtifactDetails from "../Pages/ArtifactDetails";
import LikedArtifacts from "../Pages/LikedArtifacts";
import UpdateArtifact from "../Pages/UpdateArtifact";
import Error404 from "../Pages/Error404";
import AddArtifacts from "../Pages/AddArtifacts";
import PrivateRoute from "../provider/PrivateRoute";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("https://histotrack.vercel.app/featuredArtifacts"),
        hydrateFallbackElement: (
          <LoadingThreeDotsJumping></LoadingThreeDotsJumping>
        ),
      },
      {
        path: "/allArtifacts",
        Component: AllArtifacts,
      },
      {
        path: "/addArtifacts",
        element: (
          <PrivateRoute>
            <AddArtifacts></AddArtifacts>
          </PrivateRoute>
        ),
      },
      {
        path: "/artifactsDetails/:id",
        loader: ({ params }) =>
          fetch(`https://histotrack.vercel.app/artifact/${params.id}`),
        element: (
          <PrivateRoute>
            <ArtifactDetails></ArtifactDetails>
          </PrivateRoute>
        ),
        hydrateFallbackElement: (
          <LoadingThreeDotsJumping></LoadingThreeDotsJumping>
        ),
      },
      {
        path: "/myArtifacts",
        element: (
          <PrivateRoute>
            <MyArtifacts></MyArtifacts>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateArtifact/:id",
        element: (
          <PrivateRoute>
            <UpdateArtifact></UpdateArtifact>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://histotrack.vercel.app/artifact/${params.id}`),
        hydrateFallbackElement: (
          <LoadingThreeDotsJumping></LoadingThreeDotsJumping>
        ),
      },
      {
        path: "/likedArtifacts",
        element: (
          <PrivateRoute>
            <LikedArtifacts></LikedArtifacts>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
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
    Component: Error404,
  },
]);
