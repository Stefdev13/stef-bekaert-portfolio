import React from "react";
import styles from "./AboutPage.module.css";
import Header from "../components/navigation/Header";

function AboutPage() {
  return (
    <div className={styles.main}>
      <Header />

      <h1>About me page</h1>
    </div>
  );
}

export default AboutPage;
