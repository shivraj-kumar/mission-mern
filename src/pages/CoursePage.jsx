import styles from "../styles/CoursePage.module.css";
import CourseCardFree from "../components/CourseCardFree";
import CourseCardPaid from "../components/CourseCardPaid";
import Navbar from "../components/Navbar";
import Sidebaar from "../components/Sidebaar";

const CoursePage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.contents}>
        <Sidebaar />
        <div className={styles.cardcontents}>
          <h1>
            Choose Your <span>Course</span> :
          </h1>
          <div className={styles.card}>
            <CourseCardFree />
            <CourseCardPaid />
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursePage;
