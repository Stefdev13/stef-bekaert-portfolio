import { useState, useEffect } from "react";
import styles from "./ExperienceList.module.css";
import ExperienceItem from "./ExperienceItem.jsx";
import ExperienceListSortBtn from "./ExperienceListSortBtn.jsx";
import ExperienceListFilterBtn from "./ExperienceListFilterBtn.jsx";
import {
  useFilteredAndSortedItems,
  useSortSetting,
} from "../../../context/ExperienceListProvider.jsx";
import ExperienceListSearchBtn from "./ExperienceListSearchBtn.jsx";

function ExperienceList() {
  const items = useFilteredAndSortedItems();
  const sortSetting = useSortSetting();
  const [resultString, setResultString] = useState(makeResultString());

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
    <div id="ExperienceList">
      <div className={styles.topLine}>
        <p className={styles.itemCount}>{resultString}</p>
        <div className={styles.buttonRow}>
          <ExperienceListSearchBtn />
          <ExperienceListFilterBtn />
          <ExperienceListSortBtn />
        </div>
      </div>
      <div>
        {items.map(function renderExprienceItem(item) {
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
