import React from "react";
import styles from "./ExperienceList.module.css";
import { useTheme } from "../../../context/ThemeProvider.jsx";
import ExperienceListFilterCategory from "./ExperienceListFilterCategory.jsx";

function ExperienceListFilterBox(props) {
  const theme = useTheme();
  const isOverlayOpen = props.isOverlayOpen;
  const closeOverlayFunction = props.closeOverlayFunction;

  return (
    <div className={isOverlayOpen ? styles.filterBox : styles.filterBoxClosed}>
      <div className={styles.header}>
        <h2 className={styles.title}>Filters</h2>
        <button className={styles.closeBtn} onClick={closeOverlayFunction}>
          <img
            src={theme ? "/images/cross-dark.png" : "/images/cross-light.png"}
            alt="Close"
          />
        </button>
      </div>
      <ExperienceListFilterCategory name="Type" />
      <ExperienceListFilterCategory name="Technology" />
    </div>
  );
}

export default ExperienceListFilterBox;
