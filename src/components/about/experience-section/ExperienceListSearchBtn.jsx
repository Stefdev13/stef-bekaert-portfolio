import { useState } from "react";
import styles from "./ExperienceList.module.css";
import { useTheme } from "../../../context/ThemeProvider.jsx";
import {
  useSearchText,
  useSearchTextSetter,
} from "../../../context/ExperienceListProvider.jsx";

function ExperienceListSearchBtn() {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const searchText = useSearchText();
  const setSearchText = useSearchTextSetter();

  function handleOnClickSoftClose() {
    setIsExpanded(!isExpanded);
  }

  function handleOnClickHardClose() {
    setSearchText("");
    setIsExpanded(false);
  }

  return (
    <div className={styles.searchWrapper}>
      <button
        className={`${styles.button} ${styles.searchBtn}`}
        onClick={handleOnClickSoftClose}
      >
        <img
          src={theme ? "/images/search-dark.png" : "/images/search-light.png"}
          alt="Search"
        />
      </button>
      <div
        className={`${styles.searchBar} ${
          isExpanded ? styles.show : styles.hide
        }`}
      >
        <input
          type="text"
          placeholder="Search project and course names"
          className={styles.searchField}
          value={searchText}
          onChange={function updateSearchText(e) {
            setSearchText(e.target.value);
          }}
        />
        <button
          className={styles.closeSearchBtn}
          onClick={handleOnClickHardClose}
        >
          <img
            src={theme ? "/images/cross-dark.png" : "/images/cross-light.png"}
            alt="Close"
          />
        </button>
      </div>
    </div>
  );
}

export default ExperienceListSearchBtn;
