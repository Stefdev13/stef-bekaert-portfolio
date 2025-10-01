import React from "react";
import styles from "./ExperienceItem.module.css";

function ExperienceItem(props) {
  const item = props.item;
  const isEven = props.isEven;

  return (
    <div className={`${styles.wrapper} ${isEven ? styles.even : styles.odd}`}>
      <div
        className={`${styles.typeTag} ${
          item.type.toLowerCase() == "course" ? styles.course : styles.project
        }`}
      >
        {item.type}
      </div>
      <p className={styles.name}>{item.name}</p>
      <div className={styles.technologiesList}>
        {item.technologyList.map(function renderTechnologies(technology) {
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
