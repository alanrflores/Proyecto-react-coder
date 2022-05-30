import React from "react";
import styles from "./cover.module.css";

const Cover = ({ video }) => {
  return (
    <div className={styles.coverContainer}>
      <video className={styles.video} src={video} autoPlay loop></video>
    </div>
  );
};

export default Cover;
