import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  box: {
    width: "350px",
    height: "250px",
    border: {
      width: "1px",
      style: "solid",
      radius: "12px",
      colour: "red",
    },
  },
});

function DialogBox() {
  const classes = useStyles();

  return <div className={classes.box}>DialogBox</div>;
}

export default DialogBox;
