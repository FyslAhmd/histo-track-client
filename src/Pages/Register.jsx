import React, { use, useState } from "react";
import AuthContext from "../provider/AuthContext";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Register = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser, createUser, signInGoogle, updateUser } = use(AuthContext);
  const navigate = useNavigate();

  const handlePassword = (e) => {
    const pass = e.target.value;
    setPassword(pass);

    const isValid = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(pass);
    setError(
      isValid
        ? ""
        : "Password must be at least 6 characters and include both uppercase and lowercase letters."
    );
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((res) => {
        updateUser({ displayName: name, photoURL: photoUrl })
          .then(() => {
            setUser(res.user);
            toast.success("User Register Successfully");
            navigate("/");
          })
          .catch((err) => {
            toast.error(err.code);
            setUser(res.user);
          });
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((res) => {
        setUser(res.user);
        toast.success("User Register Successfully");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };
  return (
    <>
      <div className="card bg-base-100 w-full max-w-sm mx-auto my-10 shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl font-bold text-center mb-3">Sign Up</h1>
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
              required
            />
            <label className="label">PhotoUrl</label>
            <input
              type="text"
              name="photoUrl"
              className="input"
              placeholder="PhotoUrl"
              required
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className={`input ${
                error ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Password"
              onChange={handlePassword}
              value={password}
              required
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            <button type="submit" className="btn btn-neutral mt-4">
              Sign Up
            </button>
          </form>
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Signup with Google
          </button>
          <p className="text-base mt-3">
            Already Have An Account???{" "}
            <Link className="text-red-800 font-bold" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
