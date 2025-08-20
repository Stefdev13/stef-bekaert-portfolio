import { createUseStyles } from "react-jss";
import * as Constants from "../constants/styling-constants.js";

const useStyles = createUseStyles({
  chip: {
    padding: {
      top: "1.5px",
      right: "8px",
      bottom: "1px",
      left: "8px",
    },

    backgroundColor: (props) => props.bg,

    fontFamily: Constants.FONT_QUICKSAND,
    fontWeight: "500",
    fontSize: ".85rem",
    color: (props) => props.text,

    border: {
      width: "1px",
      style: "solid",
      radius: "8px",
    },
    borderColor: (props) => props.border,
  },
});

function Chip(props) {
  const value = props.value;
  const colours = props.colours;

  const classes = useStyles(colours);

  return <div className={classes.chip}>{value}</div>;
}

export default Chip;
