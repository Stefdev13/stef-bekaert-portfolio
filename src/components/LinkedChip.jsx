import { useTechFilterOptionsDispatch } from "../context/ExperienceListProvider.jsx";
import styles from "./LinkedChip.module.css";

function LinkedChip(props) {
  const value = props.value;

  const techFilterOptionsDispatch = useTechFilterOptionsDispatch();

  function handleOnTechChipClick() {
    //First clear all the active filters, because when the user clicks a tech chip, it should only be that chip that's active
    techFilterOptionsDispatch({
      type: "Clear all",
    });

    //First turn the technology into a tech filter object the techFilterReducer function can use
    const techFilterAsOption = {
      name: value.name,
      type: "Technology",
      icon: value.icon,
      isActive: true,
    };
    techFilterOptionsDispatch({
      option: techFilterAsOption,
    });

    const experienceSection = document.getElementById("ExperienceList");

    experienceSection.scrollIntoView({ behavior: "smooth" });
  }

  if (typeof value == "string") {
    return <div className={styles.chip}>{value}</div>;
  } else {
    return (
      <div className={styles.technology} onClick={handleOnTechChipClick}>
        <img
          src={value.icon ? value.icon : "/images/technologies/fallback.svg"}
          alt={`icon for ${value.name ? value.name : `technology`}`}
          className={styles.technologyImage}
        />
        <span className={styles.technologyName}>
          {value.name ? value.name : "technology"}
        </span>
      </div>
    );
  }
}

export default LinkedChip;
