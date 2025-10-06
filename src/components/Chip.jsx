import styles from "./Chip.module.css";

function Chip(props) {
  const value = props.value;

  if (typeof value == "string") {
    return <div className={styles.chip}>{value}</div>;
  } else {
    return (
      <div className={styles.technology}>
        <img
          src={value.icon ? value.icon : "/images/technologies/fallback.svg"}
          alt={`icon for ${value.name ? value.name : `technology`}`}
          className={styles.technologyImage}
        />
        <span className={styles.technologyName}>
          {value.name ? value.name : "technology"}
        </span>
      </div>
    );
  }
}

export default Chip;
