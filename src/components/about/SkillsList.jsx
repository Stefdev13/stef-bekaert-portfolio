import React from "react";
import styles from "./SkillsList.module.css";
import { useTheme } from "../../context/ThemeProvider.jsx";
import { useNavigate } from "react-router";
import SkillSet from "./SkillSet";
import * as Constants from "../../constants/styling-constants";

function SkillsList(props) {
  const skills = props.skills;
  const isTechnical = props.technical;

  const theme = useTheme();
  let navigate = useNavigate();

  const standardColours = {
    bg: theme ? Constants.LIGHT_BG_L3 : Constants.DARK_BG_L3,
    text: theme ? Constants.LIGHT_TEXT_HEADER : Constants.DARK_TEXT_HEADER,
    border: theme ? Constants.LIGHT_BORDER : Constants.DARK_BORDER,
  };

  return (
    <div>
      <div className={styles.header}>
        <div>
          <h1 className="sectionHeading">
            {isTechnical ? "My Technical Skills" : "My Other Skills"}
          </h1>
          <p className="comment">
            {isTechnical
              ? "//A forever expanding list"
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

      <div className={styles.skillsetsWrapper}>
        {skills.map((skillSet, i) => {
          return (
            <SkillSet
              key={skillSet.title}
              skillSet={skillSet}
              colours={standardColours}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SkillsList;
