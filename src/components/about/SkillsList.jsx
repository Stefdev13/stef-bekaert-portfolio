import React from "react";
import styles from "./SkillsList.module.css";
import arrowImgLight from "../../assets/images/arrow-light-bg.png";
import arrowImgDark from "../../assets/images/arrow-dark-bg.png";
import { useTheme } from "../../context/ThemeProvider.jsx";
import { useNavigate } from "react-router";
import SkillSet from "./SkillSet";

function SkillsList(props) {
  const skills = props.skills;
  const isTechnical = props.technical;

  const theme = useTheme();
  let navigate = useNavigate();

  return (
    <div>
      <div className={styles.header}>
        <div>
          <h1>{isTechnical ? "My Technical Skills" : "My Other Skills"}</h1>
          <p>
            {isTechnical
              ? "//A forever expanding list"
              : "//Also forever expanding"}
          </p>
        </div>
        {isTechnical && (
          <div className={styles.headerCTAWrapper}>
            <div></div>
            <p>Skills in action</p>
            <button onClick={() => navigate("/work")}>
              <img
                src={theme ? arrowImgLight : arrowImgDark}
                alt="Arrow button icon"
              />
            </button>
          </div>
        )}
      </div>

      <div className={styles.skillsetsWrapper}>
        {skills.map((skillSet) => {
          return <SkillSet key={skillSet.title} skillSet={skillSet} />;
        })}
      </div>
    </div>
  );
}

export default SkillsList;
