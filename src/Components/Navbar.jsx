import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import navImg from "../assets/Logo12.png";
import profilePic from "../assets/profile.png";
import { toast } from "react-toastify";
import AuthContext from "../provider/AuthContext";

const Navbar = () => {
  const { user, setUser, logOutUser } = use(AuthContext);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const logOut = () => {
    logOutUser()
      .then(() => {
        setUser(null);
        toast.error("User Logged Out");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  const links = (
    <>
      <NavLink className="text-base md:text-lg font-medium md:mr-4 p-2" to="/">
        Home
      </NavLink>
      <NavLink
        className="text-base md:text-lg font-medium md:mr-2 p-2"
        to="/allArtifacts"
      >
        All Artifacts
      </NavLink>
      <NavLink
        className="text-base md:text-lg font-medium md:mr-2 p-2"
        to="/addArtifacts"
      >
        Add Artifacts
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 border-l border-r border-b border-white shadow-sm rounded-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="md:text-xl font-bold flex gap-3 cursor-pointer" to="/">
          <img
            className="h-7 md:h-14 rounded-md md:rounded-lg"
            src={navImg}
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          user?.photoURL ? (
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="focus:outline-none"
              >
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer"
                />
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-base-100 border border-gray-200 rounded-lg shadow-md p-4 z-50">
                  <div className="text-sm font-semibold mb-2">
                    {user.displayName}
                  </div>
                  <button
                    onClick={() => {
                      logOut();
                      setShowUserMenu(false);
                    }}
                    className="btn btn-sm bg-black text-white w-full"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <img
              src={profilePic}
              alt="Profile"
              className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer"
            />
          )
        ) : (
          <div className="flex gap-2">
            <Link className="btn bg-black text-white" to="/login">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
