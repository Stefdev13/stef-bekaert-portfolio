import KnotAndTitle from "./KnotAndTitle";
import SkillsList from "./SkillsList";
import * as Constants from "../../constants/skills-constants";
import styles from "./SkillsSection.module.css";
import { useTheme } from "../../context/ThemeProvider";

function SkillsSection() {
  const theme = useTheme();
  return (
    <div
      className={`${styles.sectionWrapper} ${theme ? "" : styles.gradientBg}`}
    >
      <KnotAndTitle title="My Skills" location="middle" />
      <div className={styles.contentAndLineWrapper}>
        <div className={styles.line} />
        <div className={styles.sectionContent}>
          <SkillsList technical={true} skills={Constants.SKILLS_TECHNICAL} />
          <SkillsList technical={false} skills={Constants.SKILLS_OTHER} />
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
