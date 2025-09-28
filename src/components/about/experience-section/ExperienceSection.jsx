import React from "react";
import styles from "./ExperienceSection.module.css";
import KnotAndTitle from "../KnotAndTitle.jsx";
import ExperienceList from "./ExperienceList.jsx";
import { COURSES } from "../../../constants/course-constants.js";
import { PROJECTS } from "../../../constants/projects-constants.js";

function ExperienceSection() {
  return (
    <div className={styles.sectionWrapper}>
      <KnotAndTitle title="Education" location="bottom" />
      <div className={styles.sectionContent}>
        <div>
          <h1 className="sectionHeading">Education</h1>
          <p className="comment">//Stuff i've learned over the years</p>
        </div>
        <ExperienceList items={COURSES.concat(PROJECTS)} />
      </div>
    </div>
  );
}

export default ExperienceSection;
