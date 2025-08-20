import React from "react";
import styles from "./AboutPage.module.css";
import Header from "../components/navigation/Header";
import AboutMeSection from "../components/about/aboutMeSection";
import SkillsSection from "../components/about/SkillsSection";

function AboutPage() {
  return (
    <div className={styles.main}>
      <Header />

      <AboutMeSection />
      <SkillsSection />
    </div>
  );
}

export default AboutPage;
