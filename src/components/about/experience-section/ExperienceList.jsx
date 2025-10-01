import React, { useState, useEffect } from "react";
import styles from "./ExperienceList.module.css";
import { useTheme } from "../../../context/ThemeProvider.jsx";
import ExperienceItem from "./ExperienceItem.jsx";
import ExperienceListSortBtn from "./ExperienceListSortBtn.jsx";
import ExperienceListFilterBtn from "./ExperienceListFilterBtn.jsx";

function ExperienceList(props) {
  //TODO: create the filter function based on the active type and tech names lists

  //Items property, filteredAndSortedItems and resultString
  const items = props.items;
  const [filteredAndSortedItems, setFilteredAndSortedItems] = useState(items);

  //Search variables
  const [searchToggle, setSearchToggle] = useState(false);
  const [searchString, setSearchString] = useState(null);

  //Filter variables
  const [filters, setFilters] = useState([]);

  //Sort variables
  const [sortSetting, setSortSetting] = useState(1);

  //Theme and styling
  const theme = useTheme();

  const resultString = makeResultString();

  //Run the first load to sort the items on the first load
  useEffect(() => {
    filterItems();
    sortItems();
    makeResultString();
  }, []);

  // ==== General method ====
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

    return `${filteredAndSortedItems.length} item${
      filteredAndSortedItems ? `s` : ``
    } found. Sorted by ${sortName}. Click to see details.`;
  }

  // ==== Methods for filtering ====
  function filterItems() {}

  function handleOnFiltersClick() {
    setFilterOverlayToggle(!filterOverlayToggle);
  }

  // ==== Methods for searching ====
  function handleOnSearchInputChanged(inputString) {
    setSearchString(inputString);

    filterAndSortItems();
  }

  function handleOnSearchClick() {
    setSearchString(null);
    setSearchToggle(!searchToggle);
  }

  // ==== Methods for sorting ====
  function sortItems() {
    let newSetting = sortSetting + 1 > 3 ? 1 : sortSetting + 1;

    setSortSetting(newSetting);

    //The JSON operations are used to clone the array of items instead of making a shallow copy
    // where the object from the original are linked to the objects in the copy
    let copyOfItems = JSON.parse(JSON.stringify(items));

    copyOfItems.sort(function sortFunction(itemA, itemB) {
      switch (newSetting) {
        case 2:
          return compareItemsByType(itemA, itemB);
        case 3:
          return compareItemsByDate(itemA, itemB);
        default:
          return compareItemsByName(itemA, itemB);
      }
    });

    setFilteredAndSortedItems(copyOfItems);
  }

  function compareItemsByType(itemA, itemB) {
    const aType = itemA.id.includes("p") ? "project" : "course";
    const bType = itemB.id.includes("p") ? "project" : "course";

    if (aType == bType) {
      return 0;
    } else if (aType == "project" && bType == "course") {
      return -1;
    } else {
      return 1;
    }
  }

  function compareItemsByDate(itemA, itemB) {
    if (new Date(itemA.date) > new Date(itemB.date)) {
      return -1;
    } else if (new Date(itemA.date) < new Date(itemB.date)) {
      return 1;
    } else return 0;
  }

  function compareItemsByName(itemA, itemB) {
    return itemA.name.localeCompare(itemB.name);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.topLine}>
        <p className={styles.itemCount}>{resultString}</p>
        <div className={styles.buttonRow}>
          <button
            className={`${styles.button} ${styles.searchBtn}`}
            onClick={handleOnSearchClick}
          >
            <img
              src={
                theme ? "/images/search-dark.png" : "/images/search-light.png"
              }
              alt="Search"
            />
          </button>
          <ExperienceListFilterBtn />
          <ExperienceListSortBtn onSortClickCallbackFunc={sortItems} />
        </div>
      </div>
      <div className={styles.itemList}>
        {filteredAndSortedItems.map((item) => {
          let index = filteredAndSortedItems.indexOf(item);

          return (
            <ExperienceItem item={item} isEven={index % 2 == 0} key={item.id} />
          );
        })}
      </div>
    </div>
  );
}

export default ExperienceList;
