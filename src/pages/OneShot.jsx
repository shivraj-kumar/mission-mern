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
    { title: "HTML Oneshot Revision", pic: `${Htmloneshot}`, url: "https://www.youtube.com/watch?v=HD13eq_Pmp8"  },
    { title: "CSS OneShot Revision", pic: `${Cssoneshot}`, url: "https://youtu.be/wRNinF7YQqQ?si=b18nvhBlbhFNyTl8" },
    { title: "UI/UX OneShot Revision", pic: `${UiUx}`, url: "https://youtu.be/JNZ0nkC7Unk?si=NEPQPsZTFRvL5RJa"},
    { title: "Cssoneshot Dev Revision", pic: `${Machine}`, url: "https://youtu.be/JxgmHe2NyeY?si=1_PkGDwQC5uVwmxg" },
    { title: "Android App Development", pic: `${Android}`, url: "https://youtu.be/uEhmQd0Z1CA?si=HebboC_fs9dusBs5"},
    { title: "JavaScript Revision", pic: `${Htmloneshot}`, url: "https://youtu.be/gIWel4gFZaY?si=6gsCHjn_juouAEaG"},
    { title: "Node JS OneShot Revision", pic: `${Android}`, url: "https://youtu.be/uEhmQd0Z1CA?si=HebboC_fs9dusBs5"},
    { title: "Machine Learning ", pic: `${Machine}`, url: "https://youtu.be/JxgmHe2NyeY?si=1_PkGDwQC5uVwmxg" },
    { title: "Cloud Computing oneshot", pic: `${Bomb}`, url: "https://youtu.be/gIWel4gFZaY?si=6gsCHjn_juouAEaG" },
  ];

  return (
    <>
      <Navbar />
      <div className={styles.oneshot}>
        <Sidebar />
        <div className={styles.contents}>
        <br />
        <br />
          <h1 className={styles.heading}>
            OneShot <span className={styles.x}>Revision Lectures:</span>
          </h1>
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
