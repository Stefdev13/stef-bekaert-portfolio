import {
  useTypeFilterOptions,
  useTechFilterOptions,
} from "../../../context/ExperienceListProvider.jsx";
import styles from "./ExperienceList.module.css";
import FilterTag from "./FilterTag";

function ExperienceListFilterCategory(props) {
  const name = props.name;

  const typeFilterOptions = useTypeFilterOptions();
  const techFilterOptions = useTechFilterOptions();

  return (
    <div className={styles.filterCategory}>
      <h3>{name}</h3>
      <div className={styles.filterOptionsList}>
        {(name == "Type" ? typeFilterOptions : techFilterOptions).map(
          function renderOptions(option) {
            return <FilterTag option={option} key={option.name} />;
          }
        )}
      </div>
    </div>
  );
}

export default ExperienceListFilterCategory;
