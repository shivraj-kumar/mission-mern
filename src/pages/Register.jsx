import Header from "../components/Header";
import imagex7 from "../images/Register.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import imagex8 from "../images/signup.svg";
import facebook from "../images/Facebook.svg";
import google from "../images/Google.svg";
import microsoft from "../images/Microsoft.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

  const notify = () => {
    toast.success('User created successfully', {
      position: "bottom-left",

      });
  }
  return (
    <>
      <Header />
      <div className="registerpage">
        <div className="regpic">
          <img src={imagex7} alt="regpic" />
        </div>
        <div className="register">
          <h2 className="cua">Create your account</h2>
          <div className="name">
            <label htmlFor="firstname">
              <h5>Full Name</h5>
              <input
                type="text"
                id="firstname"
                placeholder="First Name"
                autoComplete="username"
                required
              />
            </label>
            <label htmlFor="lastname">
              <h5>Last Name</h5>
              <input
                type="text"
                id="lastname"
                placeholder="Last Name"
                autoComplete="username"
                required
              />
            </label>
          </div>

          <label htmlFor="username">
            <h5>Username</h5>
            <input
              type="text"
              id="username"
              placeholder="Username"
              autoComplete="username"
              required
            />
          </label>
          <label>
            <h5>Email</h5>
            <input
              type="email"
              id="remail"
              placeholder="Email ID"
              autoComplete="username"
              required
            />
          </label>

          <div className="rpassword">
            <label htmlFor="password">
              <h5>Password</h5>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                autoComplete="current-password"
                required
              />
            </label>
            <label>
              <h5>Confirm Password</h5>
              <input
                type="password"
                id="confirmpassword"
                placeholder="Confirm Password"
                autoComplete="current-password"
                required
              />
            </label>
          </div>
          <div className="createaccount">
            <button className="create-account" onClick={notify}>
              <p>Create Account</p>
              <span>
                <FaArrowRightLong />
              </span>
            </button>
          </div>
          <a href="/login" className="loginlink" >Or login</a>
          <img src={imagex8} alt="signupwith" />
          <div className="rsocial">
            <button className="rsocialmedia">
              <img src={facebook} alt="facebook" />
            </button>
            <button className="rsocialmedia">
              <img src={google} alt="google" />
            </button>
            <button className="rsocialmedia">
              <img src={microsoft} alt="microsoft" />
            </button>
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Register;
