import React from "react";
import styles from "./CtaBtn.module.css";
import { useTheme } from "../context/ThemeProvider.jsx";
import { useNavigate } from "react-router";

function CtaBtn(props) {
  const theme = useTheme();
  let navigate = useNavigate();

  const btnType = props.btnType;
  const btnText = props.btnText;
  const actionOnClick = props.actionOnClick;

  function getImageSource() {
    switch (btnType) {
      case "contact":
        return theme
          ? "/images/arrow-light-bg.png"
          : "/images/arrow-dark-bg.png";
      case "contact rounded green":
        return theme
          ? "/images/arrow-light-bg.png"
          : "/images/arrow-light-bg.png";
      case "project link":
        return theme ? "/images/link-light-bg.png" : "/images/link-dark-bg.png";
      case "project source":
        return theme
          ? "/images/link-dark-info.png"
          : "/images/link-light-info.png";
      default:
        return null;
    }
  }

  function getImageAlt() {
    switch (btnType) {
      case "contact":
        return "arrow image";
      case "contact rounded green":
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
        case "contact rounded green":
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
      case "contact rounded green":
        return `${styles.btnBox} ${styles.rounded} ${styles.green}`;
      case "project link":
        return `${styles.btnBox} ${styles.standard}`;
      case "project source":
        return `${styles.btnBox} ${styles.hollow}`;
      default:
        return null;
    }
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={getBtnStyle()}
      data-test="cta-btn"
    >
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
