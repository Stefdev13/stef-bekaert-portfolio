import { useEffect } from "react";
import {
  useTypeFilterOptions,
  useTechFilterOptions,
  useTypeFilterOptionsDispatch,
  useTechFilterOptionsDispatch,
} from "../../../context/ExperienceListProvider.jsx";
import { useTheme } from "../../../context/ThemeProvider.jsx";
import styles from "./ExperienceList.module.css";
import FilterTag from "./FilterTag";

function ExperienceListFilterCategory(props) {
  const name = props.name;

  const typeFilterOptions = useTypeFilterOptions();
  const techFilterOptions = useTechFilterOptions();

  const typeFilterDispatch = useTypeFilterOptionsDispatch();
  const techFilterDispatch = useTechFilterOptionsDispatch();

  const theme = useTheme();

  let shouldShowClearAll = areAnyFiltersSelected();

  useEffect(() => {
    shouldShowClearAll = areAnyFiltersSelected();
  }, [typeFilterOptions, techFilterOptions]);

  function areAnyFiltersSelected() {
    let filters = name == "Type" ? typeFilterOptions : techFilterOptions;

    let result = false;

    for (const filter of filters) {
      result = filter.isActive;

      if (result) {
        break;
      }
    }

    return result;
  }

  function handleOnClearAllPressed() {
    if (name == "Type") {
      typeFilterDispatch({
        type: "Clear all",
      });
    } else {
      techFilterDispatch({
        type: "Clear all",
      });
    }
  }

  return (
    <div className={styles.filterCategory}>
      <section className={styles.filterHeader}>
        <h3>{name}</h3>
        {shouldShowClearAll && (
          <button
            className={styles.clearAllBtn}
            onClick={handleOnClearAllPressed}
          >
            <p>Clear all</p>
            <img
              src={theme ? "/images/cross-dark.png" : "/images/cross-light.png"}
              alt="Clear all"
            />
          </button>
        )}
      </section>
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
