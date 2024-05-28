import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebaar";
import OneshotCard from "../components/OneshotCard";
import Cssoneshot from "../images/Cssoneshot.svg";
import Htmloneshot from "../images/Htmloneshot.svg";
import Machine from "../images/Machine.svg";
import Android from "../images/Android.svg";
import UiUx from "../images/UiUx.svg";
import Bomb from "../images/Bomb.svg";
import styles from "../styles/OneShot.module.css";

const OneShot = () => {
  var topics = [
    { title: "HTML Oneshot Revision", url: `${Cssoneshot}` },
    { title: "CSS OneShot Revision", url: `${UiUx}` },
    { title: "JavaScript Revision", url: `${Htmloneshot}` },
    { title: "UI/UX OneShot Revision", url: `${UiUx}` },
    { title: "Cssoneshot Dev Revision", url: `${Machine}` },
    { title: "React OneShot Revision", url: `${Android}` },
    { title: "Node JS OneShot Revision", url: `${Android}` },
    { title: "Machine Learning ", url: `${Cssoneshot}` },
    { title: "Data Structure Revision", url: `${Bomb}` },
  ];

  return (
    <>
      <Navbar />
      <div className={styles.oneshot}>
        <Sidebar />
        <div className={styles.contents}>
          <h1 className={styles.heading}>OneShot <span className={styles.x}>Revision Lectures:</span></h1>
          <div className={styles.box}>
            {topics.map((topic, index) => (
              <OneshotCard key={index} topic={topic} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OneShot;
