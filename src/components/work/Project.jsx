import styles from "./Project.module.css";
import CtaBtn from "../../components/CtaBtn.jsx";
import * as Constants from "../../constants/styling-constants.js";
import { useTheme } from "../../context/ThemeProvider.jsx";
import ChipList from "../ChipList.jsx";

function Project(props) {
  const theme = useTheme();
  const project = props.project;

  const colours = [
    {
      bg: theme ? Constants.ACCENT_PRIMARY_LIGHT : Constants.DARK_BG_L3,
      text: theme ? Constants.LIGHT_TEXT_HEADER : Constants.ACCENT_PRIMARY,
      border: theme ? Constants.ACCENT_PRIMARY_DARK : Constants.ACCENT_PRIMARY,
    },
    {
      bg: theme ? Constants.ACCENT_INFO_LIGHT : Constants.DARK_BG_L3,
      text: theme ? Constants.LIGHT_TEXT_HEADER : Constants.ACCENT_INFO,
      border: theme ? Constants.ACCENT_INFO_DARK : Constants.ACCENT_INFO,
    },
    {
      bg: theme ? Constants.ACCENT_SUCCESS_LIGHT : Constants.DARK_BG_L3,
      text: theme ? Constants.LIGHT_TEXT_HEADER : Constants.ACCENT_SUCCESS,
      border: theme ? Constants.ACCENT_SUCCESS_DARK : Constants.ACCENT_SUCCESS,
    },
    {
      bg: theme ? Constants.ACCENT_WARNING_LIGHT : Constants.DARK_BG_L3,
      text: theme ? Constants.LIGHT_TEXT_HEADER : Constants.ACCENT_WARNING,
      border: theme ? Constants.ACCENT_WARNING_DARK : Constants.ACCENT_WARNING,
    },
    {
      bg: theme ? Constants.ACCENT_DANGER_LIGHT : Constants.DARK_BG_L3,
      text: theme ? Constants.LIGHT_TEXT_HEADER : Constants.ACCENT_DANGER,
      border: theme ? Constants.ACCENT_DANGER_DARK : Constants.ACCENT_DANGER,
    },
  ];

  function getChipLists() {
    return project.chipLists.map((list, i) => {
      let index = i;

      if (index > colours.length) {
        index = index - Math.floor(index / colours.length) * colours.length;
      }

      return (
        <ChipList
          key={i}
          title={list.title}
          listOfChipValues={list.chips}
          colours={colours[index]}
        />
      );
    });
  }

  return (
    <div
      className={`${styles.projectWrapper} ${
        project.id % 2 === 0 ? styles.even : styles.odd
      }`}
    >
      <img
        src={project.projectImg}
        alt={`Image of the project ${project.name}`}
        className={styles.image}
      />
      <div className={`${styles.projectDetails}`}>
        <div className={styles.header}>
          <h2>{project.name}</h2>
          <p>{project.subTitle}</p>
        </div>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.chipsLists}>{getChipLists()}</div>
        <div className={styles.buttonWrapper}>
          {project.projectLink && (
            <CtaBtn
              btnType="project link"
              btnText="Go to project"
              actionOnClick={() => {
                window.open(project.projectLink, "_blank");
              }}
            />
          )}
          {project.projectSourceCode && (
            <CtaBtn
              btnType="project source"
              btnText="Source code"
              actionOnClick={() => {
                window.open(project.projectSourceCode, "_blank");
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
