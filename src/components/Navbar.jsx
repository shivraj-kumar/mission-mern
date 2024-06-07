import { IoMdSettings } from "react-icons/io";
import { CgDarkMode } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import image from "../images/profile.svg";
import image8 from "../images/search.svg";

function Navbar() {
  return (
    <>
      <div className="hcontnaire">
        <div className="logo">
          <p>
            <span className="blue">Skill</span>
            <span className="yellow">Wave</span>
          </p>
        </div>
        <div className="search">
          <img src={image8} alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="icons">
          <IoMdSettings className="iconstyle" />
          <CgDarkMode className="iconstyle" />
          <IoMdNotificationsOutline className="iconstyle" />
          <div className="profile">
            <img src={image} alt="click" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
