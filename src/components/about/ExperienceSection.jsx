import React from "react";
import styles from "./ExperienceSection.module.css";
import KnotAndTitle from "./KnotAndTitle";
import ExperienceList from "./ExperienceList";

function ExperienceSection() {
  return (
    <div className={styles.sectionWrapper}>
      <KnotAndTitle title="Education" location="bottom" />
      <div className={styles.sectionContent}>
        <div>
          <h1 className="sectionHeading">Education</h1>
          <p className="comment">//Stuff i've learned over the years</p>
        </div>
        <ExperienceList />
      </div>
    </div>
  );
}

export default ExperienceSection;
