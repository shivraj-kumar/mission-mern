import styles from "../styles/CourseCardFree.module.css";
import { PiStarFour } from "react-icons/pi";
import image17 from "../images/youtubex.svg";
import image18 from "../images/udemyx.svg";
import image19 from "../images/googlex.svg";
import image20 from "../images/gogli.svg";

const CourseCard = () => {
  let points = [
    "learn for free",
    "Essential Content",
    "Unlimited access to content",
    "Will learn something new",
    "Basic Certificate",
  ];
  return (
    <div className={styles.card}>
      <div className={styles.headings}>
        <h2>Resources for</h2>
        <div className={styles.box}>
          <h3>Free</h3>
          <div className={styles.triangle}></div>
        </div>
      </div>
      <h4>Benefits:</h4>
      <div className={styles.content}>
        {points.map((item, index) => (
          <li key={index}>
            <span className={styles.x}>
              <PiStarFour />
            </span>
            {item}
          </li>
        ))}
      </div>
      <div className={styles.buttonx}>
        <button className={styles.getstarted}>Get Started</button>
      </div>
      <div className={styles.logo}>
        <img src={image17} alt="youtubelogo" />
        <img src={image18} alt="udemylogo" />
        <img src={image19} alt="googlelogo" />
        <img src={image20} alt="logo" />
      </div>
    </div>
  );
};

export default CourseCard;
