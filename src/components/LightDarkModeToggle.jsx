import { useTheme, useChangeTheme } from "../context/ThemeProvider.jsx";
import styles from "./LightDarkModeToggle.module.css";

function LightDarkModeToggle() {
  const isLightMode = useTheme();
  const dispatch = useChangeTheme();

  function renderThemeIcon() {
    const src = isLightMode
      ? "images/light-mode.png"
      : "images/dark-mode.png";

    const alt = isLightMode
      ? "Switch to dark theme"
      : "Switch to light theme";

    return <img className={styles.image} src={src} alt={alt} />;
  }

  return (
    <button
      type="button"
      className={styles.toggleBtn}
      onClick={() => {
        dispatch();
      }}
      aria-pressed={!isLightMode}
      aria-label={isLightMode ? "Switch to dark theme" : "Switch to light theme"}
      data-test="theme-toggle"
    >
      {renderThemeIcon()}
    </button>
  );
}

export default LightDarkModeToggle;
