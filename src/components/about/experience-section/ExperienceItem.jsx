import { useState, useEffect, useRef } from "react";
import styles from "./ExperienceItem.module.css";
import ExperienceItemDetailView from "./ExperienceItemDetailView";

function ExperienceItem(props) {
  const item = props.item;
  const isEven = props.isEven;
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const experienceItemWrapperRef = useRef();
  const techListWrapperRef = useRef();
  const techListRef = useRef();

  useEffect(() => {
    //React calls the useEffect before the browser paints the screen, which can make the width incorrect
    //  To fix this: use setTimeout to make this run after the paint
    setTimeout(() => {
      updateLayout();
    }, 0);

    function updateLayout() {
      //Should only update the layout when on desktop or tablet, mobile is always in column
      if (window.innerWidth >= 992) {
        let wrapperWidth =
          experienceItemWrapperRef.current.getBoundingClientRect().width;
        let techItemsWidth = techListRef.current.getBoundingClientRect().width;

        //If the list of technologies is too long we want to put in on a line below the name and item
        if (techItemsWidth / wrapperWidth > 0.54) {
          experienceItemWrapperRef.current.style.setProperty(
            "flex-direction",
            "column"
          );
        } else {
          experienceItemWrapperRef.current.style.setProperty(
            "flex-direction",
            "row"
          );
        }
      }
    }

    //We need the layout to be updated when the browser is resized
    window.addEventListener("resize", updateLayout);

    return () => window.removeEventListener("resize", updateLayout);
  }, []);

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
        ref={experienceItemWrapperRef}
      >
        <div className={styles.tagAndName}>
          <div
            className={`${styles.typeTag} ${
              item.type.toLowerCase() == "course"
                ? styles.course
                : styles.project
            }`}
          >
            {item.type}
          </div>
          <p className={styles.name}>{item.name}</p>
        </div>

        <div className={styles.techListWrapper} ref={techListWrapperRef}>
          <ul
            className={styles.technologiesList}
            ref={techListRef}
            id="TechList"
          >
            {item.technologyList.map(function renderTechnologies(technology) {
              return (
                <div key={technology.name} className={styles.technologyTag}>
                  <img src={technology.icon} alt={technology.name} />
                  <p>{technology.name}</p>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExperienceItem;
