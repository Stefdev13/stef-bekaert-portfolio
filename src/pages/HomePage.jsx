import React from "react";
import { useState } from "react";
import styles from "./HomePage.module.css";
import TextEffect from "../components/TextEffect";

function HomePage() {
  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>
        Hi, <span className={styles.name}>I'm Stef,</span>
      </h1>
      <h1 className={styles.heading}>
        I <span>design</span> and build <TextEffect></TextEffect>
      </h1>

      <p className={styles.comment}>//and I enjoy doing it :)</p>
    </div>
  );
}

export default HomePage;
