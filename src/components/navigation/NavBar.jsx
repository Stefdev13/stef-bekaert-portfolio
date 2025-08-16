import React from "react";
import { NavLink } from "react-router";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
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
  );
}

export default NavBar;
