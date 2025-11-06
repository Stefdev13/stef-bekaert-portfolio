import styles from "./EducationSection.module.css";
import KnotAndTitle from "./KnotAndTitle";
import { motion } from "motion/react";

function EducationSection() {
  const variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: 0.1,
      },
    },
  };

  return (
    <div className={styles.sectionWrapper} data-test="education-section">
      <KnotAndTitle title="Education" location="middle" />
      <div className={styles.contentAndLineWrapper}>
        <div className={styles.line} />
        <div className={styles.sectionContent}>
          <div>
            <h1 className="sectionHeading">Education</h1>
            <p className="comment">//Stuff i've learned over the years</p>
          </div>
          <div className={styles.eductionList}>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
            >
              <div className={styles.eduction}>
                <p className={styles.year}>2023</p>
                <p className={styles.dash}>-</p>
                <div>
                  <h2>Banaba International Business Management</h2>
                  <p className="comment">//Hogeschool Gent</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
            >
              <div className={styles.eduction}>
                <p className={styles.year}>2022</p>
                <p className={styles.dash}>-</p>
                <div>
                  <h2>
                    Bachelor Toegepaste Informatica: Mobile & Enterprise
                    developer
                  </h2>
                  <p className="comment">//Hogeschool Gent</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationSection;
