import React from "react";
import styles from "./ErrorPage.module.css";
import { useTheme } from "../context/ThemeProvider";
import { NavLink } from "react-router";
import imgDark from "../assets/images/not-found-dark.png";
import imgLight from "../assets/images/not-found-light.png";
import Header from "../components/navigation/Header";

function ErrorPage(props) {
  const message = props.message;
  const theme = useTheme();

  return (
    <div className={styles.main}>
      <Header />
      <img src={theme ? imgDark : imgLight} alt="icon for a broken webpage" />
      <div>
        <h1>Oops</h1>
        <h1>{message}</h1>
      </div>
      <NavLink to="/" className={styles.navLink} data-test="homepage-btn">
        Go to homepage
      </NavLink>
    </div>
  );
}

export default ErrorPage;
