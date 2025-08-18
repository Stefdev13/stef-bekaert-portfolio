import React from "react";
import styles from "./AboutPage.module.css";
import Header from "../components/navigation/Header";
import AboutMeSection from "../components/about/aboutMeSection";

function AboutPage() {
  return (
    <div className={styles.main}>
      <Header />

      <AboutMeSection />
    </div>
  );
}

export default AboutPage;
