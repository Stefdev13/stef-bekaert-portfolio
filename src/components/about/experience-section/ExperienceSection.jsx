import React from "react";
import styles from "./ExperienceSection.module.css";
import KnotAndTitle from "../KnotAndTitle.jsx";
import ExperienceList from "./ExperienceList.jsx";
import ExperienceListProvider from "../../../context/ExperienceListProvider.jsx";

function ExperienceSection() {
  return (
    <div className={styles.sectionWrapper}>
      <KnotAndTitle title="Education" location="bottom" />
      <div className={styles.sectionContent}>
        <div>
          <h1 className="sectionHeading">Experience</h1>
          <p className="comment">
            //A list of all the projects and courses I have completed.
          </p>
        </div>
        <ExperienceListProvider>
          <ExperienceList />
        </ExperienceListProvider>
      </div>
    </div>
  );
}

export default ExperienceSection;
