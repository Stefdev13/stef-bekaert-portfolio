import React from "react";
import { NavLink } from "react-router";
import styles from "./NavBar.module.css";
import LightDarkModeToggle from "../LightDarkModeToggle";

function NavBar() {
  return (
    <div className={styles.row}>
      <LightDarkModeToggle />
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
