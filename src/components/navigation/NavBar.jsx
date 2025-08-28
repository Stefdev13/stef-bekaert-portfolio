import React, { useState } from "react";
import { NavLink } from "react-router";
import styles from "./NavBar.module.css";
import LightDarkModeToggle from "../LightDarkModeToggle";
import { useTheme } from "../../context/ThemeProvider";
import menuBurgerDark from "../../assets/images/menu-burger-dark.png";
import menuBurgerLight from "../../assets/images/menu-burger-light.png";
import arrowImgLight from "../../assets/images/arrow-light-bg.png";
import arrowImgDark from "../../assets/images/arrow-dark-bg.png";

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
          <img src={theme ? menuBurgerDark : menuBurgerLight} alt="menu icon" />
        </div>
      </div>

      <div className={styles.navbar}>
        <NavLink to="/" className={`${styles.navLink} ${displayState}`}>
          Home
        </NavLink>
        <NavLink to="/about" className={`${styles.navLink} ${displayState}`}>
          About Me
        </NavLink>
        <NavLink to="/work" className={`${styles.navLink} ${displayState}`}>
          Work
        </NavLink>
        <NavLink
          to="/contact"
          className={`${styles.contactBtn} ${displayState}`}
        >
          Contact me <img src={theme ? arrowImgLight : arrowImgDark} alt="" />
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
