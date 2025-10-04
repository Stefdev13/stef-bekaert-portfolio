import { useState } from "react";
import styles from "./ExperienceItem.module.css";
import ExperienceItemDetailView from "./ExperienceItemDetailView";

function ExperienceItem(props) {
  const item = props.item;
  const isEven = props.isEven;
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  function handleOnItemClick() {
    setIsOverlayOpen(!isOverlayOpen);
  }

  function handleOnOverlayClick() {
    setIsOverlayOpen(false);
  }

  function handleDetailViewOnCloseClick() {
    setIsOverlayOpen(false);
  }

  return (
    <div>
      <div
        className={isOverlayOpen ? styles.overlayOpen : styles.overlayClosed}
        onClick={handleOnOverlayClick}
      ></div>
      <ExperienceItemDetailView
        item={item}
        isOpen={isOverlayOpen}
        onClosedCallback={handleDetailViewOnCloseClick}
      />
      <div
        className={`${styles.wrapper} ${isEven ? styles.even : styles.odd}`}
        onClick={handleOnItemClick}
      >
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
    </div>
  );
}

export default ExperienceItem;
