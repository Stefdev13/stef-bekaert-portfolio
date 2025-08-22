import React from "react";
import styles from "./CtaBtn.module.css";
import { useTheme } from "../context/ThemeProvider.jsx";
import { useNavigate } from "react-router";
import arrowImgLight from "../assets/images/arrow-light-bg.png";
import arrowImgDark from "../assets/images/arrow-dark-bg.png";
import linkLight from "../assets/images/link-light-bg.png";
import linkDark from "../assets/images/link-dark-bg.png";
import linkLightInfo from "../assets/images/link-light-info.png";
import linkDarkInfo from "../assets/images/link-dark-info.png";

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
      case "project source":
        return theme ? linkDarkInfo : linkLightInfo;
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

  function getBtnStyle() {
    switch (btnType) {
      case "contact":
        return `${styles.btnBox} ${styles.standard}`;
      case "project link":
        return `${styles.btnBox} ${styles.standard}`;
      case "project source":
        return `${styles.btnBox} ${styles.hollow}`;
      default:
        return null;
    }
  }

  return (
    <button type="button" onClick={onClick} className={getBtnStyle()}>
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
