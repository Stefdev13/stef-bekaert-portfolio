import styles from "./ExperienceList.module.css";
import { useTheme } from "../../../context/ThemeProvider.jsx";
import { useSortSettingDispatch } from "../../../context/ExperienceListProvider.jsx";

function ExperienceListSortBtn() {
  const theme = useTheme();
  const dispatch = useSortSettingDispatch();

  return (
    <button className={`${styles.button} ${styles.sortBtn}`} onClick={dispatch}>
      <img
        src={theme ? "/images/sort-dark.png" : "/images/sort-light.png"}
        alt="Sort"
      />
    </button>
  );
}

export default ExperienceListSortBtn;
