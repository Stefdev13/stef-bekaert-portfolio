import React from "react";
import styles from "./AboutPage.module.css";
import Header from "../components/navigation/Header";
import AboutMeSection from "../components/about/AboutMeSection.jsx";
import SkillsSection from "../components/about/SkillsSection.jsx";
import EducationSection from "../components/about/EducationSection.jsx";

function AboutPage() {
  return (
    <div className={styles.main}>
      <Header />

      <AboutMeSection />
      <SkillsSection />
      <EducationSection />
    </div>
  );
}

export default AboutPage;
