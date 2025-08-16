import { createContext, useContext, useReducer } from "react";
import * as Constants from "../constants/styling-constants";
import React from "react";

//ThemeContext holds a boolean to determine light (true) or dark (false) mode
const ThemeContext = createContext(null);
const ThemeDispatchContext = createContext(null);

export function ThemeProvider({ children }) {
  const [mode, dispatch] = useReducer(changeTheme, true);

  return (
    <ThemeContext value={mode}>
      <ThemeDispatchContext value={dispatch}>{children}</ThemeDispatchContext>
    </ThemeContext>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export function useChangeTheme() {
  return useContext(ThemeDispatchContext);
}

function changeTheme(state) {
  if (state) {
    setToDarkMode();
    return !state;
  } else {
    setToLightMode();
    return !state;
  }
}

function setToLightMode() {
  //Change the base colours
  document.documentElement.style.setProperty(
    "--var-colour-bg-l1",
    Constants.LIGHT_BG_L1
  );
  document.documentElement.style.setProperty(
    "--var-colour-bg-l2",
    Constants.LIGHT_BG_L2
  );
  document.documentElement.style.setProperty(
    "--var-colour-bg-l3",
    Constants.LIGHT_BG_L3
  );
  document.documentElement.style.setProperty(
    "--var-colour-border",
    Constants.LIGHT_BORDER
  );
  document.documentElement.style.setProperty(
    "--var-colour-text-heading",
    Constants.LIGHT_TEXT_HEADER
  );
  document.documentElement.style.setProperty(
    "--var-colour-text-muted",
    Constants.LIGHT_TEXT_MUTED
  );
  document.documentElement.style.setProperty(
    "--var-colour-glass-bg-logo",
    Constants.LIGHT_GLASS_BG_LOGO
  );
  document.documentElement.style.setProperty(
    "--var-colour-glass-bg",
    Constants.LIGHT_GLASS_BG
  );
  document.documentElement.style.setProperty(
    "--var-colour-shadow",
    Constants.LIGHT_SHADOW
  );

  //Change the accent colours
  document.documentElement.style.setProperty(
    "--var-colour-primary",
    Constants.ACCENT_PRIMARY_DARK
  );
  document.documentElement.style.setProperty(
    "--var-colour-danger",
    Constants.ACCENT_DANGER_DARK
  );
  document.documentElement.style.setProperty(
    "--var-colour-warning",
    Constants.ACCENT_WARNING_DARK
  );
  document.documentElement.style.setProperty(
    "--var-colour-success",
    Constants.ACCENT_SUCCESS_DARK
  );
  document.documentElement.style.setProperty(
    "--var-colour-info",
    Constants.ACCENT_INFO_DARK
  );
}

function setToDarkMode() {
  //Change the base colours
  document.documentElement.style.setProperty(
    "--var-colour-bg-l1",
    Constants.DARK_BG_L1
  );
  document.documentElement.style.setProperty(
    "--var-colour-bg-l2",
    Constants.DARK_BG_L2
  );
  document.documentElement.style.setProperty(
    "--var-colour-bg-l3",
    Constants.DARK_BG_L3
  );
  document.documentElement.style.setProperty(
    "--var-colour-border",
    Constants.DARK_BORDER
  );
  document.documentElement.style.setProperty(
    "--var-colour-text-heading",
    Constants.DARK_TEXT_HEADER
  );
  document.documentElement.style.setProperty(
    "--var-colour-text-muted",
    Constants.DARK_TEXT_MUTED
  );
  document.documentElement.style.setProperty(
    "--var-colour-glass-bg-logo",
    Constants.DARK_GLASS_BG_LOGO
  );
  document.documentElement.style.setProperty(
    "--var-colour-glass-bg",
    Constants.DARK_GLASS_BG
  );
  document.documentElement.style.setProperty(
    "--var-colour-shadow",
    Constants.DARK_SHADOW
  );

  //Change the accent colours
  document.documentElement.style.setProperty(
    "--var-colour-primary",
    Constants.ACCENT_PRIMARY
  );
  document.documentElement.style.setProperty(
    "--var-colour-danger",
    Constants.ACCENT_DANGER
  );
  document.documentElement.style.setProperty(
    "--var-colour-warning",
    Constants.ACCENT_WARNING
  );
  document.documentElement.style.setProperty(
    "--var-colour-success",
    Constants.ACCENT_SUCCESS
  );
  document.documentElement.style.setProperty(
    "--var-colour-info",
    Constants.ACCENT_INFO
  );
}
