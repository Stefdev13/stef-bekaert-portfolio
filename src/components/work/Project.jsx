import styles from "./Project.module.css";
import CtaBtn from "../../components/CtaBtn.jsx";
import ChipList from "../ChipList.jsx";

function Project(props) {
  const project = props.project;

  function getChipLists() {
    return project.chipLists.map((list, i) => {
      return (
        <ChipList
          key={i}
          title={list.title}
          listOfChipValues={list.chips}
          isLinkedChipList={false}
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
        alt={`Image of the project: ${project.name}`}
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
