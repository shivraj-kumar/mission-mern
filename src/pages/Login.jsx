import React from "react";
import Header from "../components/Header";
import imagex from "../images/Picture.svg";
import imagex2 from "../images/Signin.svg";
import imagex3 from "../images/Or.svg";
import facebook from "../images/Facebook.svg";
import google from "../images/Google.svg";
import microsoft from "../images/Microsoft.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const navigate = useNavigate();
  const loginHandler = (e) => {
    e.preventDefault();
    const formData = {
      number: e.target.number.value,
      password: e.target.password.value,
    };
    axios
      .post("http://localhost:7000/api/user/login", formData)
      .then((res) => {
        console.log(res);
        toast.success(res.data.msg);
        if (res.data.msg == "Signin Successfull") {
          localStorage.setItem("token", res.data.token);
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header />
      <div>
        <div className="loginpage">
          <form className="login" onSubmit={loginHandler}>
            <label htmlFor="number">
              <h5>Email</h5>
              <input
                type="number"
                id="number"
                placeholder="Phone No."
                autoComplete="number"
                name="number"
                required
              />
            </label>
            <label htmlFor="lpassword">
              <h5>Password</h5>
              <input
                type="password"
                style={{ width: "325px" }}
                id="lpassword"
                name="password"
                placeholder="Password"
                autoComplete="current-password"
                required
              />
            </label>
            <button className="signin" type="submit">
              <p>Sign In</p>
              <span className=".imx">
                <FaArrowRightLong />
              </span>
            </button>
            <img src={imagex2} alt="line" />
            <div className="social">
              <button className="socialmedia">
                <img src={facebook} alt="facebook" />
              </button>
              <button className="socialmedia">
                <img src={google} alt="google" />
              </button>
              <button className="socialmedia">
                <img src={microsoft} alt="microsoft" />
              </button>
            </div>
            <h2>Sign In to your account</h2>
            <img src={imagex3} alt="or" />
            <div className="createa">
              <Link to={"/register"}>
                <button className="caccount">Create new account</button>
              </Link>
            </div>
          </form>
          <div className="picture">
            <img src={imagex} alt="picture" />
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
