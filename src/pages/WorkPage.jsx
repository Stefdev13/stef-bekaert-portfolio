import React from "react";
import styles from "./WorkPage.module.css";
import Header from "../components/navigation/Header";
import * as Projects from "../constants/projects-constants.js";
import Project from "../components/work/Project.jsx";

function WorkPage() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.backgroundColouredBlur} />
      <div className={styles.pageHeader}>
        <h1 className="heading">My work</h1>
        <p className="comment">//A selection of projects I have worked on.</p>
      </div>
      <div className={styles.projectsWrapper}>
        {Projects.PROJECTS.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
}

export default WorkPage;
