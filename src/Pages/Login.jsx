import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../provider/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const { setUser, loginUser, signInGoogle } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((res) => {
        setUser(res.user);
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("User Login Successfully");
      })
      .catch((err) => {
        if (err.code == "auth/invalid-credential") {
          return toast.error("Invalid Email or Password");
        }
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
      <div className="card backdrop-blur-md w-full max-w-sm mx-auto shrink-0 shadow-2xl my-20">
        <div className="card-body">
          <h1 className="text-2xl font-bold text-center mb-3">Login</h1>
          <form onSubmit={handleLogin} className="fieldset">
            <label className="">Email</label>
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
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
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
            Login with Google
          </button>
          <p className="text-base mt-3">
            Don't Have An Account???{" "}
            <Link className="text-red-800 font-bold" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
