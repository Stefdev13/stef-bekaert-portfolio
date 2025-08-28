import React, { useState } from "react";
import { NavLink } from "react-router";
import styles from "./NavBar.module.css";
import LightDarkModeToggle from "../LightDarkModeToggle";
import { useTheme } from "../../context/ThemeProvider";
import menuBurgerDark from "../../assets/images/menu-burger-dark.png";
import menuBurgerLight from "../../assets/images/menu-burger-light.png";

function NavBar() {
  const theme = useTheme();
  const [isNavbarUnfurled, setIsNavbarUnfurled] = useState(false);

  return (
    <div className={styles.row}>
      <div className={styles.toggleRow}>
        <LightDarkModeToggle />
        <div
          className={styles.navbarToggle}
          onClick={() => {
            setIsNavbarUnfurled(!isNavbarUnfurled);
          }}
        >
          <img src={theme ? menuBurgerDark : menuBurgerLight} alt="menu icon" />
        </div>
      </div>

      <div className={styles.navbar}>
        <NavLink
          to="/"
          className={`${styles.navLink} ${
            isNavbarUnfurled ? styles.unfurled : ""
          }`}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={`${styles.navLink} ${
            isNavbarUnfurled ? styles.unfurled : ""
          }`}
        >
          About Me
        </NavLink>
        <NavLink
          to="/work"
          className={`${styles.navLink} ${
            isNavbarUnfurled ? styles.unfurled : ""
          }`}
        >
          Work
        </NavLink>
        <NavLink
          to="/contact"
          className={`${styles.navLink} ${
            isNavbarUnfurled ? styles.unfurled : ""
          }`}
        >
          Contact me
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
