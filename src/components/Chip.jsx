import React from "react";
import styles from "./Chip.module.css";

function Chip(props) {
  const value = props.value;

  return <div className={styles.chip}>{value}</div>;
}

export default Chip;
