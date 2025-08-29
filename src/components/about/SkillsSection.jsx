import KnotAndTitle from "./KnotAndTitle";
import SkillsList from "./SkillsList";
import * as Constants from "../../constants/skills-constants";
import styles from "../../pages/AboutPage.module.css";

function SkillsSection() {
  return (
    <div className={styles.sectionWrapper}>
      <KnotAndTitle title="My Skills" location="middle" />
      <div className={styles.contentAndLineWrapper}>
        <div className={styles.line} />
        <div className={`${styles.sectionContent} ${styles.extraPadding}`}>
          <SkillsList technical={true} skills={Constants.SKILLS_TECHNICAL} />
          <SkillsList technical={false} skills={Constants.SKILLS_OTHER} />
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
