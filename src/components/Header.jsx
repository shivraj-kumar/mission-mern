import { IoMdSettings } from "react-icons/io";
import { CgDarkMode } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import image from "../images/profile.svg";
function Header() {
  return (
    <>
      <div className="hcontnaire">
        <div className="logo">
          <p>
            <span className="blue">Skill</span>
            <span className="yellow">Wave</span>
          </p>
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

export default Header;
