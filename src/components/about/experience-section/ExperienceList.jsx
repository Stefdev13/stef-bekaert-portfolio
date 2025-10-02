import React, { useState, useEffect } from "react";
import styles from "./ExperienceList.module.css";
import { useTheme } from "../../../context/ThemeProvider.jsx";
import ExperienceItem from "./ExperienceItem.jsx";
import ExperienceListSortBtn from "./ExperienceListSortBtn.jsx";
import ExperienceListFilterBtn from "./ExperienceListFilterBtn.jsx";
import {
  useFilteredAndSortedItems,
  useSortSetting,
} from "../../../context/ExperienceListProvider.jsx";

function ExperienceList() {
  //Theme and styling
  const theme = useTheme();
  const items = useFilteredAndSortedItems();
  const sortSetting = useSortSetting();
  const [resultString, setResultString] = useState(makeResultString());

  //Run the first load to sort the items on the first load
  useEffect(() => {
    setResultString(makeResultString());
  }, [items]);

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

    let activeItemsLength = items.reduce(function countActiveItems(
      accumulator,
      item
    ) {
      return item.shouldShow ? accumulator + 1 : accumulator;
    },
    0);

    return `${activeItemsLength} item${
      activeItemsLength > 1 ? `s` : ``
    } found. Sorted by ${sortName}. Click to see details.`;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.topLine}>
        <p className={styles.itemCount}>{resultString}</p>
        <div className={styles.buttonRow}>
          <button className={`${styles.button} ${styles.searchBtn}`}>
            <img
              src={
                theme ? "/images/search-dark.png" : "/images/search-light.png"
              }
              alt="Search"
            />
          </button>
          <ExperienceListFilterBtn />
          <ExperienceListSortBtn />
        </div>
      </div>
      <div className={styles.itemList}>
        {items.map((item) => {
          let index = items.indexOf(item);
          if (item.shouldShow) {
            return (
              <ExperienceItem
                item={item}
                isEven={index % 2 == 0}
                key={item.id}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default ExperienceList;
