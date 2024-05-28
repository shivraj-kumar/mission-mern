import React from "react";
import styles from "../styles/OneshotCard.module.css";

const OneshotCart = ({ topic }) => {
  return (
    <>
      
      <div className={styles.xbox}>
      <div className="styles.xpicture">
      <img src={topic.url} alt="img" />
      </div>
      <h3>{topic.title}</h3>
      </div>
    </>
  );
};

export default OneshotCart;
