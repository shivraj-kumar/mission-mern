import styles from "../styles/CourseCardPaid.module.css";
import { PiStarFourThin } from "react-icons/pi";
import image17 from "../images/youtubex.svg";
import image18 from "../images/udemyx.svg";
import image19 from "../images/googlex.svg";
import image20 from "../images/gogli.svg";
import image21 from "../images/mircrosoftx.svg";
import image22 from "../images/linkedin.svg";
import { Link } from "react-router-dom";

const CourseCardPaid = () => {
  const points = [
    "Unlock Premium Content",
    "Expert Instructors",
    "Interactive Assignment",
    "Personalized Feedback",
    "Dedicated Feedback",
  ];

  return (
    <div className={styles.card}>
      <div className={styles.headings}>
        <h2>Resources for</h2>
        <div className={styles.box}>
          <h3>PAID</h3>
          <div className={styles.triangle}></div>
        </div>
      </div>
      <h4>Benefits:</h4>
      <ul className={styles.content}>
        {points.map((item, index) => (
          <li key={index} className={styles.listItem}>
            <span className={styles.x}>
              <PiStarFourThin className={styles.icon} />
            </span>{" "}
            {item}
          </li>
        ))}
      </ul>
      <div className={styles.buttonx}>
        <Link to="/paidcources"><button className={styles.getstarted}>Get Started</button></Link>
      </div>
      <div className={styles.logo}>
        <img src={image17} alt="YouTube logo" />
        <img src={image18} alt="Udemy logo" />
        <img src={image19} alt="Google logo" />
        <img src={image20} alt="Logo" />
        <img src={image21} alt="Microsoft logo" />
        <img src={image22} alt="LinkedIn logo" />
      </div>
    </div>
  );
};

export default CourseCardPaid;
