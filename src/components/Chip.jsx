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
    margin: {
      right: "6px",
      bottom: "8px",
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
  technology: {
    padding: {
      top: "4px",
      right: "6px",
      bottom: "4px",
      left: "6px",
    },
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "5px",
  },
  technologyImage: {
    height: "20px",
    width: "auto",
  },
  technologyName: {
    margin: "0",
    fontFamily: Constants.FONT_QUICKSAND,
    fontWeight: "550",
    color: (props) => props.text,
  },
});

function Chip(props) {
  const value = props.value;
  const colours = props.colours;

  const classes = useStyles(colours);

  if (typeof value == "string") {
    return <div className={classes.chip}>{value}</div>;
  } else {
    return (
      <div className={classes.technology}>
        <img
          src={value.icon ? value.icon : "/images/technologies/fallback.svg"}
          alt={`icon for ${value.name ? value.name : `technology`}`}
          className={classes.technologyImage}
        />
        <span className={classes.technologyName}>
          {value.name ? value.name : "technology"}
        </span>
      </div>
    );
  }
}

export default Chip;
