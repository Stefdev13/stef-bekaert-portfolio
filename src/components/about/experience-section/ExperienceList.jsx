import React, { useState, useEffect } from "react";
import styles from "./ExperienceList.module.css";
import { useTheme } from "../../../context/ThemeProvider.jsx";
import ExperienceItem from "./ExperienceItem.jsx";
import ExperienceListSortBtn from "./ExperienceListSortBtn.jsx";
import ExperienceListFilterBtn from "./ExperienceListFilterBtn.jsx";
import { useFilteredAndSortedItems } from "../../../context/ExperienceListProvider.jsx";

function ExperienceList() {
  //TODO: move sorting to the provider
  //TODO: move resultString to provider
  const [resultString, setresultString] = useState("");

  //Search variables
  const [searchToggle, setSearchToggle] = useState(false);
  const [searchString, setSearchString] = useState(null);

  //Theme and styling
  const theme = useTheme();
  const items = useFilteredAndSortedItems();

  //Run the first load to sort the items on the first load
  // useEffect(() => {
  //   makeResultString();
  // }, []);

  // ==== General method ====
  // function makeResultString() {
  //   let sortName;

  //   switch (sortSetting) {
  //     case 2:
  //       sortName = "type";
  //       break;
  //     case 3:
  //       sortName = "date";
  //       break;
  //     default:
  //       sortName = "name";
  //       break;
  //   }

  //   return `${items.length} item${
  //     items.length > 1 ? `s` : ``
  //   } found. Sorted by ${sortName}. Click to see details.`;
  // }

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
