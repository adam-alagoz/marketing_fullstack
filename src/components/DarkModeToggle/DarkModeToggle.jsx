"use client";

import React from "react";
import styles from "./darkModeToggle.css";

const DarkModeToggle = () => {
  const mode = "light";
  return (
    <div className={styles.darkContainer}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
