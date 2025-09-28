import React, { useState, useEffect } from "react";
import styles from "./ExperienceList.module.css";
import { useTheme } from "../../../context/ThemeProvider.jsx";
import ExperienceItem from "./ExperienceItem.jsx";

function ExperienceList(props) {
  //Items property, filteredAndSortedItems and resultString
  const items = props.items;
  const [filteredAndSortedItems, setFilteredAndSortedItems] = useState(items);
  const [resultString, setResultString] = useState("");

  //Search variables
  const [searchToggle, setSearchToggle] = useState(false);
  const [searchString, setSearchString] = useState(null);

  //Filter variables
  const [filterOverlayToggle, setFilterOverlayToggle] = useState(false);
  const [filters, setFilters] = useState([]);

  //Sort variables
  const [sortSetting, setSortSetting] = useState(1);

  //Theme and styling
  const theme = useTheme();

  //Run the first load to sort the items on the first load
  useEffect(() => {
    filterAndSortItems();
    makeResultString();
  }, []);

  function filterAndSortItems() {}

  function makeResultString() {
    let sortName;

    switch (sortSetting) {
      case 2:
        sortName = "type";
        break;
      case 3:
        sortName = "date";
        break;
      default:
        sortName = "name";
        break;
    }

    setResultString(
      `${filteredAndSortedItems.length} item${
        filteredAndSortedItems ? `s` : ``
      } found. Sorted by ${sortName}. Tap to see details.`
    );
  }

  function handleOnSearchClick() {
    setSearchString(null);
    setSearchToggle(!searchToggle);
  }

  function handleOnSearchInputChanged(inputString) {
    setSearchString(inputString);

    filterAndSortItems();
  }

  function handleOnFiltersClick() {
    setFilterOverlayToggle(!filterOverlayToggle);
  }

  function handleOnSortClick() {
    setSortSetting(sortSetting + 1 > 3 ? 1 : sortSetting + 1);
    makeResultString();
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.topLine}>
        <p className={styles.itemCount}>{resultString}</p>
        <div className={styles.buttonRow}>
          <button className={styles.searchBtn} onClick={handleOnSearchClick}>
            <img
              src={
                theme ? "/images/search-dark.png" : "/images/search-light.png"
              }
              alt="Search"
            />
          </button>
          <button className={styles.filterBtn} onClick={handleOnFiltersClick}>
            <img
              src={
                theme ? "/images/filter-dark.png" : "/images/filter-light.png"
              }
              alt="Filter"
            />
          </button>
          <button className={styles.sortBtn} onClick={handleOnSortClick}>
            <img
              src={theme ? "/images/sort-dark.png" : "/images/sort-light.png"}
              alt="Sort"
            />
          </button>
        </div>
      </div>
      <div className={styles.itemList}>
        {filteredAndSortedItems.map((item) => (
          <ExperienceItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default ExperienceList;
