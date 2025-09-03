import React from "react";
import { useTheme } from "../context/ThemeProvider";
import { createUseStyles } from "react-jss";
import * as Constants from "../constants/styling-constants";

const useStyles = createUseStyles({
  popUpContainer: {
    position: "fixed",
    right: 0,
    bottom: 0,

    display: "none",
    flexDirection: "row",
    alignItems: "center",
    gap: "15px",

    marginRight: "20px",

    padding: "8px 15px 8px 12px",

    backgroundColor: (props) => props.bgColour,

    boxShadow: (props) =>
      `4px 4px 10px 0px ${
        props.theme ? Constants.LIGHT_SHADOW : Constants.DARK_SHADOW
      }`,

    border: {
      width: "2px",
      style: "solid",
      radius: "12px",
    },
    borderColor: (props) => props.borderAndTextColour,

    fontFamily: Constants.FONT_QUICKSAND,
    fontSize: ".8rem",
    fontWeight: "650",
    color: (props) => props.borderAndTextColour,

    "& img": {
      width: "13px",
      height: "13px",
    },
  },
  drop: {
    animationName: "$drop",
    animationDuration: (props) => `${props.popupDurationInMs}ms`,
    animationTimingFunction: "ease-in-out",

    display: "flex",
  },
  "@keyframes drop": {
    "0%": {
      opacity: 0,
      bottom: 0,
    },
    "5%": {
      opacity: 0,
    },
    "20%": {
      opacity: 1,
      bottom: "3vh",
    },
    "80%": {
      opacity: 1,
      bottom: "3vh",
    },
    "95%": {
      opacity: 0,
      bottom: 0,
    },
    "100%": {
      opacity: 0,
      bottom: 0,
    },
  },
});

function PopupMessage(props) {
  const type = props.type;
  const show = props.show;
  const dialogMessage = props.dialogMessage;
  const popupDurationInMs = props.popupDurationInMs;

  const theme = useTheme();

  const stylingProps = {
    theme: theme,
    bgColour: getBgColour(type.toLowerCase()),
    borderAndTextColour: getBorderAndTextColour(type.toLowerCase()),
    popupDurationInMs: popupDurationInMs,
  };

  function getBgColour(type) {
    switch (type) {
      case "info":
        return theme ? Constants.ACCENT_INFO_LIGHT : Constants.DARK_BG_L3;
      case "danger":
        return theme ? Constants.ACCENT_DANGER_LIGHT : Constants.DARK_BG_L3;
      case "warning":
        return theme ? Constants.ACCENT_WARNING_LIGHT : Constants.DARK_BG_L3;
      case "success":
        return theme ? Constants.ACCENT_SUCCESS_LIGHT : Constants.DARK_BG_L3;
      default:
        return theme ? Constants.ACCENT_PRIMARY_LIGHT : Constants.DARK_BG_L3;
    }
  }

  function getBorderAndTextColour(type) {
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

  function getIcon() {
    switch (type.toLowerCase()) {
      case "info":
        return theme ? "/images/info-dark.png" : "/images/info-light.png";
      case "danger":
        return theme ? "/images/danger-dark.png" : "/images/danger-light.png";
      case "warning":
        return theme ? "/images/warning-dark.png" : "/images/warning-light.png";
      case "success":
        return theme ? "/images/success-dark.png" : "/images/success-light.png";
      default:
        return theme
          ? "/images/notification-dark.png"
          : "/images/notification-light.png";
    }
  }

  const classes = useStyles(stylingProps);

  return (
    <div
      className={`${classes.popUpContainer} ${show ? classes.drop : ""}`}
      data-test="popup-message"
    >
      <img src={getIcon()} alt="icon for popup message" />
      {dialogMessage}
    </div>
  );
}

export default PopupMessage;
