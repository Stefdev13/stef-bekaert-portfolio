import { useState } from "react";
import styles from "./ExperienceList.module.css";
import { useTheme } from "../../../context/ThemeProvider.jsx";
import ExperienceListFilterBox from "./ExperienceListFilterBox.jsx";

function ExperienceListFilterBtn() {
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
      <ExperienceListFilterBox
        isOverlayOpen={isOverlayOpen}
        closeOverlayFunction={handleOnOverlayClick}
      />
    </div>
  );
}

export default ExperienceListFilterBtn;
