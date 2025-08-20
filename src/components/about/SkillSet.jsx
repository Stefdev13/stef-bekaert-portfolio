import React from "react";
import ChipList from "../../components/ChipList.jsx";
import styles from "./SkillSet.module.css";

function SkillSet(props) {
  const skillSet = props.skillSet;
  const colours = props.colours;

  return (
    <div className={styles.skillSet}>
      <div className={styles.header}>
        <h2>{skillSet.title}</h2>
        {skillSet.subTitle && <p>{skillSet.subTitle}</p>}
      </div>
      {skillSet.lists.map((list) => (
        <ChipList
          key={list.title}
          title={list.title}
          listOfChipValues={list.list}
          colours={colours}
        />
      ))}
    </div>
  );
}

export default SkillSet;
