import React from "react";
import { NavLink } from "react-router";
import styles from "./NavBar.module.css";
import LightDarkModeToggle from "../LightDarkModeToggle";
import { useTheme } from "../../context/ThemeProvider";
import menuBurgerDark from "../../assets/images/menu-burger-dark.png";
import menuBurgerLight from "../../assets/images/menu-burger-light.png";

function NavBar() {
  const theme = useTheme();
  return (
    <div className={styles.row}>
      <LightDarkModeToggle />
      <div className={styles.navbarToggle}>
        <img src={theme ? menuBurgerDark : menuBurgerLight} alt="menu icon" />
      </div>
      <div className={styles.navbar}>
        <NavLink to="/" className={styles.navLink}>
          Home
        </NavLink>
        <NavLink to="/about" className={styles.navLink}>
          About Me
        </NavLink>
        <NavLink to="/work" className={styles.navLink}>
          Work
        </NavLink>
        <NavLink to="/contact" className={styles.contactBtn}>
          Contact me
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
