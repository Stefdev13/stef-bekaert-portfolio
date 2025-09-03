import React from "react";
import { useTheme, useChangeTheme } from "../context/ThemeProvider.jsx";
import styles from "./LightDarkModeToggle.module.css";

function LightDarkModeToggle() {
  const theme = useTheme();
  const dispatch = useChangeTheme();

  function getImage() {
    if (theme) {
      return (
        <img
          className={styles.image}
          src="images/light-mode.png"
          alt="toggle dark mode"
        />
      );
    } else {
      return (
        <img
          className={styles.image}
          src="images/dark-mode.png"
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
