import image27 from "../images/udmilogo.svg";
import image28 from "../images/courseprofile.svg";
import image29 from "../images/coursetimer.svg";
import image30 from "../images/coursecertificate.svg";

function Coursescard(props) {
  return (
    <>
      <a className="frecourse" href="Introduction to HTML5 Course by University of Michigan | Coursera">
        <div className="coursebox">
          <div className="courseheadingbox">
            <h2>{props.h2}</h2>
            <img src={props.imag} alt="click me" />
          </div>
          <p className="p">{props.para}</p>
          <div className="courseibox2">
            <div className="courseminibox">
              <img src={image28} alt="click me" />
              <p className="coursepara">{props.para2}</p>
            </div>
            <div className="courseminibox">
              <img src={image29} alt="click me" />
              <p className="coursepara">{props.para3}</p>
            </div>
          </div>
          <div className="courseminibox courseminibox2">
            <img src={image30} alt="click me" />
            <p className="coursepara">Certificates</p>
          </div>
          <button>{props.button}</button>
        </div>
      </a>
    </>
  );
}

export default Coursescard;
