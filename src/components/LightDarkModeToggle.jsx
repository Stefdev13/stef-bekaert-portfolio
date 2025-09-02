import React from "react";
import { useTheme, useChangeTheme } from "../context/ThemeProvider.jsx";
import styles from "./LightDarkModeToggle.module.css";
import lightModeImg from "../assets/images/light-mode.png";
import darkModeImg from "../assets/images/dark-mode.png";

function LightDarkModeToggle() {
  const theme = useTheme();
  const dispatch = useChangeTheme();

  function getImage() {
    if (theme) {
      return (
        <img
          className={styles.image}
          src={lightModeImg}
          alt="toggle dark mode"
        />
      );
    } else {
      return (
        <img
          className={styles.image}
          src={darkModeImg}
          alt="toggle light mode"
        />
      );
    }
  }

  return (
    <div
      className={styles.toggleBtn}
      onClick={() => {
        dispatch();
      }}
      data-test="theme-toggle"
    >
      {getImage()}
    </div>
  );
}

export default LightDarkModeToggle;
