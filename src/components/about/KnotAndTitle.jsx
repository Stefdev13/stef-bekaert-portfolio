import React from "react";
import * as Constants from "../../constants/styling-constants";
import { useTheme } from "../../context/ThemeProvider.jsx";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",

    flexDirection: "column",
    justifyItems: "end",

    paddingLeft: "50px",
    paddingRight: "30px",
  },
  topLine: {
    height: "100px",
    width: "3px",

    backgroundColor: (props) =>
      props.theme ? Constants.ACCENT_PRIMARY_DARK : Constants.ACCENT_PRIMARY,

    marginLeft: "4.5px",
    marginRight: "4.5px",
  },
  bottomLine: {
    height: "20px",
    width: "3px",

    backgroundColor: (props) =>
      props.theme ? Constants.ACCENT_PRIMARY_DARK : Constants.ACCENT_PRIMARY,

    marginLeft: "4.5px",
    marginRight: "4.5px",
  },
  knotWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    alignContent: "center",
  },
  knotUpperLine: {
    height: "10px",
    width: "3px",

    backgroundColor: (props) =>
      props.location.toLowerCase() !== "top"
        ? props.theme
          ? Constants.ACCENT_PRIMARY_DARK
          : Constants.ACCENT_PRIMARY
        : "transparent",

    marginLeft: "4.5px",
    marginRight: "4.5px",
  },
  knotBottomLine: {
    height: "10px",
    width: "3px",

    backgroundColor: (props) =>
      props.location.toLowerCase() !== "bottom"
        ? props.theme
          ? Constants.ACCENT_PRIMARY_DARK
          : Constants.ACCENT_PRIMARY
        : "transparent",

    marginLeft: "4.5px",
    marginRight: "4.5px",
  },
  knotSection: {
    display: "flex",
    flexDirection: "column",
    gap: "0px",
    alignContent: "start",
  },
  knot: {
    height: "6px",
    width: "6px",

    backgroundColor: "transparent",

    border: {
      width: "3px",
      style: "solid",
      radius: "40%",
    },
    borderColor: (props) =>
      props.theme ? Constants.ACCENT_PRIMARY_DARK : Constants.ACCENT_PRIMARY,
  },
  title: {
    fontFamily: Constants.FONT_IBM_PLEX_MONO,
    color: (props) =>
      props.theme ? Constants.ACCENT_INFO_DARK : Constants.ACCENT_INFO,

    margin: "0px",

    alignContent: "center",
  },
});

function KnotAndTitle(props) {
  const title = props.title;
  const location = props.location;
  const theme = useTheme();

  const stylingProps = {
    theme: theme,
    location: location,
    bottomMargin: location.toLowerCase() === "top",
  };

  const classes = useStyles(stylingProps);

  function shouldLoadTopLine() {
    return (
      location.toLowerCase() === "middle" || location.toLowerCase() === "bottom"
    );
  }

  function shouldLoadBottomLine() {
    return (
      location.toLowerCase() === "middle" || location.toLowerCase() === "top"
    );
  }

  return (
    <div className={classes.wrapper}>
      {shouldLoadTopLine() && <div className={classes.topLine} />}
      <div className={classes.knotWrapper}>
        <div className={classes.knotSection}>
          <div className={classes.knotUpperLine} />
          <div className={classes.knot} />
          <div className={classes.knotBottomLine} />
        </div>
        <p className={classes.title}>&lt;{title}/&gt;</p>
      </div>
      {shouldLoadBottomLine() && <div className={classes.bottomLine} />}
    </div>
  );
}

export default KnotAndTitle;
