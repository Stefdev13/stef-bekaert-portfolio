import React from "react";
import styles from "./EducationSection.module.css";
import KnotAndTitle from "./KnotAndTitle";

function EducationSection() {
  return (
    <div className={styles.bottomSectionWrapper}>
      <KnotAndTitle title="Education" location="bottom" />
      <div className={styles.bottomSectionContent}>
        <div>
          <h1 className="sectionHeading">Education</h1>
          <p className="comment">//Stuff i've learned over the years</p>
        </div>
        <div className={styles.eductionList}>
          <div className={styles.eduction}>
            <p className={styles.year}>2023</p>
            <p className={styles.dash}>-</p>
            <div>
              <h2>Banaba International Business Management</h2>
              <p className="comment">//Hogeschool Gent</p>
            </div>
          </div>
          <div className={styles.eduction}>
            <p className={styles.year}>2022</p>
            <p className={styles.dash}>-</p>
            <div>
              <h2>
                Bachelor Toegepaste Informatica: Mobile & Enterprise developer
              </h2>
              <p className="comment">//Hogeschool Gent</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationSection;
