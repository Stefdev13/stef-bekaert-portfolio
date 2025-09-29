import React from "react";
import styles from "./ExperienceList.module.css";
import { useTheme } from "../../../context/ThemeProvider.jsx";

function ExperienceListSortBtn(props) {
  const onSortClickCallbackFunc = props.onSortClickCallbackFunc;

  const theme = useTheme();

  return (
    <button
      className={`${styles.button} ${styles.sortBtn}`}
      onClick={onSortClickCallbackFunc}
    >
      <img
        src={theme ? "/images/sort-dark.png" : "/images/sort-light.png"}
        alt="Sort"
      />
    </button>
  );
}

export default ExperienceListSortBtn;
