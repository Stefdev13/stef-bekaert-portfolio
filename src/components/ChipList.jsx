import React from "react";
import styles from "./ChipList.module.css";
import Chip from "./Chip";

function ChipList(props) {
  const title = props.title;
  const listOfChipValues = props.listOfChipValues;

  return (
    <div className={styles.wrapper}>
      <p className="comment">//{title}</p>
      <div className={styles.chipList}>
        {listOfChipValues.map((value) => (
          <Chip key={value} value={value} />
        ))}
      </div>
    </div>
  );
}

export default ChipList;
