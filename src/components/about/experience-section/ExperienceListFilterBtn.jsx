import React, { useState } from "react";
import styles from "./ExperienceList.module.css";
import { useTheme } from "../../../context/ThemeProvider.jsx";

function ExperienceListFilterBtn(props) {
  //TODO: Get all the technologies from the constants
  //TODO: Set the different filterlist constants (filter categories and their options)
  //TODO: Implement the callback when the user selects different filters
  //TODO: Implement global state overlayActive to disable scrolling when the overlay is active

  //   const items = props.items;
  //   const onSelectedFiltersChangedCallback =
  //     props.onSelectedFiltersChangedCallback;
  const theme = useTheme();

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  function handleOnFilterBtnClick() {
    setIsOverlayOpen(!isOverlayOpen);
  }

  function handleOnOverlayClick() {
    setIsOverlayOpen(false);
  }

  return (
    <div>
      <button
        className={`${styles.button} ${styles.filterBtn}`}
        onClick={handleOnFilterBtnClick}
      >
        <img
          src={theme ? "/images/filter-dark.png" : "/images/filter-light.png"}
          alt="Filter"
        />
      </button>
      <div
        className={isOverlayOpen ? styles.overlayOpen : styles.overlayClosed}
        onClick={handleOnOverlayClick}
      />
      <div
        className={isOverlayOpen ? styles.filterBox : styles.filterBoxClosed}
      ></div>
    </div>
  );
}

export default ExperienceListFilterBtn;
