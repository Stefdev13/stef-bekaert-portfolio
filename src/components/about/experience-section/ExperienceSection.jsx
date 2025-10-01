import React from "react";
import styles from "./ExperienceSection.module.css";
import KnotAndTitle from "../KnotAndTitle.jsx";
import ExperienceList from "./ExperienceList.jsx";
import { COURSES } from "../../../constants/course-constants.js";
import { PROJECTS } from "../../../constants/projects-constants.js";
import ExperienceListProvider from "../../../context/ExperienceListProvider.jsx";

function ExperienceSection() {
  //TODO: prep the list of items to send to <ExperienceList/>
  //TODO:     1. make copy?
  //TODO:     2. add type property to obj
  //TODO:     3. add list of tech names property to obj
  //TODO:     3. add list of tech objects property to obj

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
          <ExperienceList items={COURSES.concat(PROJECTS)} />
        </ExperienceListProvider>
      </div>
    </div>
  );
}

export default ExperienceSection;
