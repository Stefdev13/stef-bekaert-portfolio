import styles from "./ExperienceSection.module.css";
import KnotAndTitle from "../KnotAndTitle.jsx";
import ExperienceList from "./ExperienceList.jsx";
import { useSortSetting } from "../../../context/ExperienceListProvider.jsx";
import { motion } from "motion/react";

function ExperienceSection() {
  const sortSetting = useSortSetting();

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
    <div className={styles.sectionWrapper}>
      <KnotAndTitle title="Experience" location="bottom" />
      <div className={styles.sectionContent}>
        <div>
          <h1 className="sectionHeading">Experience</h1>
          <p className="comment">
            //A list of all the projects and courses I have completed. Sorted by{" "}
            {sortSetting == 1 ? "name" : sortSetting == 2 ? "type" : "date"}.
          </p>
        </div>
        <motion.div variants={variants} initial="hidden" whileInView="visible">
          <ExperienceList />
        </motion.div>
      </div>
    </div>
  );
}

export default ExperienceSection;
