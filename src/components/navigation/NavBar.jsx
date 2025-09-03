import React, { useState } from "react";
import { NavLink } from "react-router";
import styles from "./NavBar.module.css";
import LightDarkModeToggle from "../LightDarkModeToggle";
import { useTheme } from "../../context/ThemeProvider";

function NavBar() {
  const theme = useTheme();
  const [displayState, setDisplayState] = useState("");

  function handleNavbarToggleOnClick() {
    if (displayState !== styles.slideOut) {
      if (displayState === "") {
        setDisplayState(styles.unfurled);
      } else {
        setDisplayState(styles.slideOut);

        setTimeout(() => {
          setDisplayState("");
        }, 200);
      }
    }
  }

  return (
    <div className={styles.row}>
      <div className={styles.toggleRow}>
        <LightDarkModeToggle />
        <div
          className={styles.navbarToggle}
          onClick={() => {
            handleNavbarToggleOnClick();
          }}
        >
          <img
            src={
              theme
                ? "/images/menu-burger-dark.png"
                : "/images/menu-burger-light.png"
            }
            alt="menu icon"
          />
        </div>
      </div>

      <div className={styles.navbar}>
        <NavLink
          to="/"
          className={`${styles.navLink} ${displayState}`}
          data-test="home-navlink"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={`${styles.navLink} ${displayState}`}
          data-test="about-navlink"
        >
          About Me
        </NavLink>
        <NavLink
          to="/work"
          className={`${styles.navLink} ${displayState}`}
          data-test="work-navlink"
        >
          Work
        </NavLink>
        <NavLink
          to="/contact"
          className={`${styles.contactBtn} ${displayState}`}
          data-test="contact-navlink"
        >
          Contact me{" "}
          <img
            src={
              theme ? "/images/arrow-light-bg.png" : "/images/arrow-dark-bg.png"
            }
            alt=""
          />
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
