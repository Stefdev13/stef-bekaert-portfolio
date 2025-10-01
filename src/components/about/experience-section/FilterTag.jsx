import {
  useTypeFilterOptionsDispatch,
  useTechFilterOptionsDispatch,
} from "../../../context/ExperienceListProvider.jsx";
import styles from "./ExperienceList.module.css";

function FilterTag(props) {
  //TODO: Change the isSelected state variable to the isActive property on the filter object
  //TODO: onClick => call the update function imported from the context provider
  const option = props.option;

  const typeFilterOptionsDispatch = useTypeFilterOptionsDispatch();
  const techFilterOptionsDispatch = useTechFilterOptionsDispatch();

  function handleOnClick() {
    option.isActive = !option.isActive;

    if (option.type == "Type") {
      typeFilterOptionsDispatch({
        option: option,
      });
    } else {
      techFilterOptionsDispatch({
        option: option,
      });
    }
  }

  return (
    <button
      className={`${styles.filterTag} ${
        option.isActive ? styles.selected : ""
      }`}
      onClick={handleOnClick}
    >
      {option.icon && <img src={option.icon} alt={option.name} />}
      <p>{option.name}</p>
    </button>
  );
}

export default FilterTag;
