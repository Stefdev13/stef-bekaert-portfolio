import React from "react";
import KnotAndTitle from "./KnotAndTitle";
import SkillsList from "./SkillsList";
import * as Constants from "../../constants/skills-constants";
import styles from "../../pages/AboutPage.module.css";

function SkillsSection() {
  return (
    <div className={styles.sectionWrapper}>
      <KnotAndTitle title="My Skills" location="middle" />
      <div className={styles.sectionContent}>
        <SkillsList technical={true} skills={Constants.SKILLS_TECHNICAL} />
      </div>
    </div>
  );
}

export default SkillsSection;
