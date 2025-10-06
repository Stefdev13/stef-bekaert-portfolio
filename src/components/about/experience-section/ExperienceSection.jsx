import styles from "./ExperienceSection.module.css";
import KnotAndTitle from "../KnotAndTitle.jsx";
import ExperienceList from "./ExperienceList.jsx";
import { useSortSetting } from "../../../context/ExperienceListProvider.jsx";

function ExperienceSection() {
  const sortSetting = useSortSetting();

  return (
    <div className={styles.sectionWrapper}>
      <KnotAndTitle title="Education" location="bottom" />
      <div className={styles.sectionContent}>
        <div>
          <h1 className="sectionHeading">Experience</h1>
          <p className="comment">
            //A list of all the projects and courses I have completed. Sorted by{" "}
            {sortSetting == 1 ? "name" : sortSetting == 2 ? "type" : "date"}.
          </p>
        </div>
        <ExperienceList />
      </div>
    </div>
  );
}

export default ExperienceSection;
