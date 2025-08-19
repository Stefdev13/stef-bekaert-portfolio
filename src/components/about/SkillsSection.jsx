import React from "react";
import KnotAndTitle from "./KnotAndTitle";

function SkillsSection() {
  return (
    <div className={styles.sectionWrapper}>
      <KnotAndTitle title="Biography" location="top" />
      <div className={styles.sectionContent}></div>
    </div>
  );
}

export default SkillsSection;
