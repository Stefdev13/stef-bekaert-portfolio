import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <NavBar />
    </div>
  );
}

export default Header;
