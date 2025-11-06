import styles from "./AboutPage.module.css";
import Header from "../components/navigation/Header";
import AboutMeSection from "../components/about/AboutMeSection.jsx";
import SkillsSection from "../components/about/SkillsSection.jsx";
import EducationSection from "../components/about/EducationSection.jsx";
import ExperienceSection from "../components/about/experience-section/ExperienceSection.jsx";
import ExperienceListProvider from "../context/ExperienceListProvider.jsx";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useRef, useEffect } from "react";

function AboutPage() {
  return (
    <div className={styles.main}>
      <ExperienceListProvider>
        <Header />
        <AboutMeSection />
        <SkillsSection />
        <EducationSection />
        <ExperienceSection />
      </ExperienceListProvider>
    </div>
  );
}

export default AboutPage;
