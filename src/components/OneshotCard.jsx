import React from "react";
import styles from "../styles/OneshotCard.module.css";

const OneshotCart = ({ topic }) => {
  return (
    <>
      <div className={styles.xbox}>
        <div className={styles.xpicture}>
          <a href={topic.url}> <img src={topic.pic} alt="img" /> </a>
        </div>
        <h3 className={styles.titles}>{topic.title}</h3>
      </div>
    </>
  );
};

export default OneshotCart;
