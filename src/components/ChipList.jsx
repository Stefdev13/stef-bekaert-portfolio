import styles from "./ChipList.module.css";
import Chip from "./Chip";

function ChipList(props) {
  const title = props.title;
  const listOfChipValues = props.listOfChipValues;
  const colours = props.colours;

  return (
    <div className={styles.wrapper}>
      <p className="comment">//{title}</p>
      <div className={styles.chipList}>
        {listOfChipValues.map((value) => (
          <Chip key={value} value={value} colours={colours} />
        ))}
      </div>
    </div>
  );
}

export default ChipList;
