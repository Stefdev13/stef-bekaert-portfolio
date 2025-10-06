import styles from "./ChipList.module.css";
import Chip from "./Chip";
import LinkedChip from "./LinkedChip";

function ChipList(props) {
  const title = props.title;
  const listOfChipValues = props.listOfChipValues;
  const isLinkedChipList = props.isLinkedChipList;

  return (
    <div className={styles.wrapper}>
      <p className="comment">//{title}</p>
      <div className={styles.chipList}>
        {listOfChipValues.map(function renderChipsOrLinkedChips(value) {
          if (isLinkedChipList) {
            return (
              <LinkedChip
                key={typeof value == "string" ? value : value.name}
                value={value}
              />
            );
          } else {
            return (
              <Chip
                key={typeof value == "string" ? value : value.name}
                value={value}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default ChipList;
