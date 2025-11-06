import ChipList from "../../components/ChipList.jsx";
import styles from "./SkillSet.module.css";
import { motion } from "motion/react";

function SkillSet(props) {
  const skillSet = props.skillSet;

  const variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: 0.1,
      },
    },
  };

  return (
    <motion.div variants={variants} initial="hidden" whileInView="visible">
      <div className={styles.skillSet}>
        <div className={styles.header}>
          <h2>{skillSet.title}</h2>
          {skillSet.subTitle && <p>{skillSet.subTitle}</p>}
        </div>
        <div className={styles.chipsLists}>
          {skillSet.lists.map((list) => (
            <ChipList
              key={list.title}
              title={list.title}
              listOfChipValues={list.list}
              isLinkedChipList={true}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default SkillSet;
