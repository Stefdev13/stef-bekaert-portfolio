import styles from "./SkillsList.module.css";
import { useTheme } from "../../context/ThemeProvider.jsx";
import { useNavigate } from "react-router";
import SkillSet from "./SkillSet";
import { motion } from "motion/react";

function SkillsList(props) {
  const skills = props.skills;
  const isTechnical = props.technical;

  const theme = useTheme();
  let navigate = useNavigate();

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
    <div>
      <motion.div variants={variants} initial="hidden" whileInView="visible">
        <div className={styles.header}>
          <div>
            <h1 className="sectionHeading">
              {isTechnical ? "My Technical Skills" : "My Other Skills"}
            </h1>
            <p className="comment">
              {isTechnical
                ? "//A forever expanding list. Click on a technology to see some of my (recent) experience with it."
                : "//Also forever expanding"}
            </p>
          </div>

          {isTechnical && (
            <div className={styles.headerCTAWrapper}>
              <div></div>
              <p>Skills in action</p>
              <button
                onClick={() => navigate("/work")}
                className={styles.skillsInActionBtn}
              >
                <img
                  src={
                    theme
                      ? "/images/arrow-light-bg.png"
                      : "/images/arrow-dark-bg.png"
                  }
                  alt="Arrow button icon"
                />
              </button>
            </div>
          )}
        </div>
      </motion.div>

      <div className={styles.skillsetsWrapper}>
        {skills.map((skillSet, i) => {
          return <SkillSet key={skillSet.title} skillSet={skillSet} />;
        })}
      </div>
    </div>
  );
}

export default SkillsList;
