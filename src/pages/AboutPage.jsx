import React from "react";
import styles from "./AboutPage.module.css";
import Header from "../components/navigation/Header";
import AboutMeSection from "../components/about/aboutMeSection";
import SkillsSection from "../components/about/SkillsSection";
import TestimonialsSection from "../components/about/TestimonialsSection";
import EducationSection from "../components/about/EducationSection";

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
