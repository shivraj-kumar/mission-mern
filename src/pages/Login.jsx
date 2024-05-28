import Header from "../components/Header";
import imagex from "../images/Picture.svg";
import imagex2 from "../images/Signin.svg";
import imagex3 from "../images/Or.svg";
import facebook from "../images/Facebook.svg";
import google from "../images/Google.svg";
import microsoft from "../images/Microsoft.svg";
import { FaArrowRightLong } from "react-icons/fa6";

const Login = () => {
  return (
    <>
      <Header />
      <form action="/">
      <div className="loginpage">
        <div className="login">
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" id="email" placeholder="Email ID" autoComplete="username" />
          </label>
          <label htmlFor="password">
            <h4>Password</h4>
            <input type="password" id="password" placeholder="Password" autoComplete="current-password" />
          </label>
          <button className="signin">
            <p>Sign In</p>
            <span><FaArrowRightLong /></span>
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
            <button className="caccount">Create new account</button>
          </div>
        </div>
        <div className="picture">
          <img src={imagex} alt="picture" />
        </div>
      </div>
      </form>
    </>
  );
};

export default Login;
