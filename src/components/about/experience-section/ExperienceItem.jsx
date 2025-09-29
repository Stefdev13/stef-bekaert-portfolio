import React from "react";
import styles from "./ExperienceItem.module.css";

function ExperienceItem(props) {
  const item = props.item;
  const isEven = props.isEven;
  const type = item.id.includes("p") ? "Project" : "Course";

  const technologyList = (function mergeTechnologyList() {
    var result = [];

    if (item.id.includes("c")) {
      result = item.technologyList;
    } else {
      item.chipLists.forEach((chipList) => {
        chipList.chips.forEach((technology) => {
          //Check if the technology is already in the result (by checking the names), so we can avoid duplicates
          if (
            !result
              .map((technology) => technology.name)
              .includes(technology.name)
          ) {
            result.push(technology);
          }
        });
      });
    }

    return result;
  })();

  return (
    <div className={`${styles.wrapper} ${isEven ? styles.even : styles.odd}`}>
      <div
        className={`${styles.typeTag} ${
          type.toLowerCase() == "course" ? styles.course : styles.project
        }`}
      >
        {type}
      </div>
      <p className={styles.name}>{item.name}</p>
      <div className={styles.technologiesList}>
        {technologyList.map(function renderTechnologies(technology) {
          let index = technologyList.indexOf(technology);

          return (
            <div key={technology.name} className={styles.technologyTag}>
              <img src={technology.icon} alt={technology.name} />
              <p>{technology.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExperienceItem;
