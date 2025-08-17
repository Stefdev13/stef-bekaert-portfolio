import React from "react";
import styles from "./CtaBtn.module.css";
import { useTheme } from "../context/ThemeProvider.jsx";
import { useNavigate } from "react-router";
import arrowImgLight from "../assets/images/arrow-light-bg.png";
import arrowImgDark from "../assets/images/arrow-dark-bg.png";
import linkLight from "../assets/images/link-light-bg.png";
import linkDark from "../assets/images/link-dark-bg.png";

function CtaBtn(props) {
  const theme = useTheme();
  let navigate = useNavigate();

  const btnType = props.btnType;
  const btnText = props.btnText;
  const actionOnClick = props.actionOnClick;

  function getImageSource() {
    switch (btnType) {
      case "contact":
        return theme ? arrowImgLight : arrowImgDark;
      case "project link":
        return theme ? linkLight : linkDark;
      default:
        return null;
    }
  }

  function getImageAlt() {
    switch (btnType) {
      case "contact":
        return "arrow image";
      case "project link":
        return "arrow image";
      default:
        return "icon image";
    }
  }

  function onClick() {
    if (actionOnClick) {
      actionOnClick();
    } else {
      switch (btnType) {
        case "contact":
          navigate("/contact");
          break;
        default:
          //Do nothing
          break;
      }
    }
  }

  return (
    <button type="button" onClick={onClick} className={styles.btnBox}>
      {btnText}
      {getImageSource() && (
        <img
          className={styles.image}
          src={getImageSource()}
          alt={getImageAlt()}
        />
      )}
    </button>
  );
}

export default CtaBtn;
