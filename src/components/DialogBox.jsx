import React from "react";
import { createUseStyles } from "react-jss";
import { useTheme } from "../context/ThemeProvider.jsx";
import * as Constants from "../constants/styling-constants.js";

const useStyles = createUseStyles({
  box: {
    // width: "350px",

    padding: {
      top: "12px",
      bottom: "20px",
      right: "20px",
      left: "20px",
    },

    background: (props) =>
      props.theme ? Constants.LIGHT_BG_L3 : Constants.DARK_BG_L3,

    boxShadow: (props) =>
      `3px 3px 25px 4px ${
        props.theme ? Constants.LIGHT_SHADOW : Constants.DARK_SHADOW
      }`,

    border: {
      width: "1px",
      style: "solid",
      radius: "12px",
    },
    borderColor: (props) =>
      props.theme ? Constants.LIGHT_BORDER : Constants.DARK_BORDER,

    "& h2": {
      fontSize: "1.3rem",
      margin: "0px",

      color: (props) => props.primaryBtnColour,
    },

    "& p": {
      fontSize: ".9rem",
      lineHeight: 1.2,
    },
  },
  btnRow: {
    marginTop: "35px",

    display: "flex",
    flexDirection: "row",
    gap: "15px",

    "& button": {
      height: "40px",

      padding: {
        right: "20px",
        left: "20px",
      },

      borderRadius: "12px",

      fontFamily: Constants.FONT_QUICKSAND,
      fontSize: ".85rem",
      fontWeight: "600",
    },

    "& button:hover": {
      cursor: "pointer",
    },
  },
  primaryBtn: {
    background: "transparent",

    border: {
      width: "1px",
      style: "solid",
    },
    borderColor: (props) => props.primaryBtnColour,

    color: (props) => props.primaryBtnColour,
  },
  secondaryBtn: {
    background: "transparent",

    border: {
      width: "2px",
      style: "solid",
    },
    borderColor: (props) =>
      props.theme ? Constants.LIGHT_TEXT_HEADER : Constants.DARK_TEXT_HEADER,

    color: (props) =>
      props.theme ? Constants.LIGHT_TEXT_HEADER : Constants.DARK_TEXT_HEADER,
  },
  tertiaryBtn: {
    background: "transparent",

    border: {
      width: "2px",
      style: "solid",
    },
    borderColor: (props) =>
      props.theme ? Constants.LIGHT_TEXT_HEADER : Constants.DARK_TEXT_HEADER,

    color: (props) =>
      props.theme ? Constants.LIGHT_TEXT_HEADER : Constants.DARK_TEXT_HEADER,
  },
});

function DialogBox(props) {
  const title = props.title;
  const text = props.text;
  const dialogType = props.dialogType;
  const primaryBtn = props.primaryBtn;
  const secondaryBtn = props.secondaryBtn;
  const tertiaryBtn = props.tertiaryBtn;

  const theme = useTheme();

  const stylingProps = {
    theme: theme,
    primaryBtnColour: getPrimaryBtnColour(dialogType.toLowerCase()),
  };

  function getPrimaryBtnColour(type) {
    switch (type) {
      case "info":
        return theme ? Constants.ACCENT_INFO_DARK : Constants.ACCENT_INFO;
      case "danger":
        return theme ? Constants.ACCENT_DANGER_DARK : Constants.ACCENT_DANGER;
      case "warning":
        return theme ? Constants.ACCENT_WARNING_DARK : Constants.ACCENT_WARNING;
      case "success":
        return theme ? Constants.ACCENT_SUCCESS_DARK : Constants.ACCENT_SUCCESS;
      default:
        return theme ? Constants.ACCENT_PRIMARY_DARK : Constants.ACCENT_PRIMARY;
    }
  }

  const classes = useStyles(stylingProps);

  return (
    <div className={classes.box}>
      <h2 className="heading">{title}</h2>
      <p className="text">{text}</p>
      <div className={classes.btnRow}>
        {primaryBtn && (
          <button onClick={primaryBtn.onClick} className={classes.primaryBtn}>
            {primaryBtn.btnText}
          </button>
        )}
        {secondaryBtn && (
          <button className={classes.secondaryBtn}>
            <button
              onClick={secondaryBtn.onClick}
              className={classes.secondaryBtn}
            >
              {secondaryBtn.btnText}
            </button>
          </button>
        )}
        {tertiaryBtn && (
          <button className={classes.tertiaryBtn}>
            <button
              onClick={tertiaryBtn.onClick}
              className={classes.tertiaryBtn}
            >
              {tertiaryBtn.btnText}
            </button>
          </button>
        )}
      </div>
    </div>
  );
}

export default DialogBox;
