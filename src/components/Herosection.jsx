import image4 from "../images/girl2 image.svg";
import image2 from "../images/boy image.svg";
import image3 from "../images/girl image.svg";
import { Link } from "react-router-dom";

function Herosection() {
  return (
    <>
      <div className="herocont">
        <div className="herobox">
          <h1>
            <span className="blue blue2">Skill</span>
            <span className="yellow blue2">Wave</span>
          </h1>
          <p className="heropara">Unlock Your Potential with SkillWave</p>
          <p className="heropara2">
            Welcome to SkillWave, where learning knows no bounds. We believe
            that education is the key to personal and professional growth, and
            we're here to guide you on your journey to success.
          </p>
         <Link to={'/login'}> <button className="herobutton">Start your learning journey</button></Link>
        </div>
        <div className="herobox2">
          <div className="imgbox">
            <img className="girlimage" src={image3} alt="" />
          </div>
          <div className="imgbox2">
            <img className="boyimage" src={image2} alt="click" />
            <img className="girl2image" src={image4} alt="click" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosection;
