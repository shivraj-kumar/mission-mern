import image9 from "../images/dash.svg";
import image10 from "../images/career.svg";
import image12 from "../images/oneshots.svg";
import image13 from "../images/logout.svg";
import image14 from "../images/connect.svg";

function Sidebaar() {
  return (
    <>
      <div className="sidebaarcont">
        <div className="sidebaarbox">
          <a href="">
            <div className="dash">
              <img src={image9} alt="click" />
              <p>Dashboard</p>
            </div>
          </a>
          <a href="">
            <div className="dash">
              <img src={image10} alt="click" />
              <p>Carrer Path</p>
            </div>
          </a>
          <a href="">
            <div className="dash">
              <img src={image10} alt="click" />
              <p>Course</p>
            </div>
          </a>
          <a href="">
            <div className="dash">
              <img src={image12} alt="click" />
              <p>OneShoots</p>
            </div>
          </a>
          <a href="">
            <div className="dash">
              <img src={image13} alt="click" />
              <p>Logout</p>
            </div>
          </a>
        </div>
        <div className="sidebaarbox2">
          <h2>Student Support</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna.
          </p>
          <div className="sidebaarbutton">
            <button>
              <img src={image14} alt="click " /> Connect Now
            </button>
          </div>
        </div>
        <p className="term">Terms & Services Privacy Policy</p>
      </div>
    </>
  );
}

export default Sidebaar;
