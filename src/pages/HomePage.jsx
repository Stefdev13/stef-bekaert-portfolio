import React from "react";
import { useState } from "react";
import styles from "./HomePage.module.css";
import TextEffect from "../components/TextEffect";
import { useChangeTheme } from "../context/ThemeProvider.jsx";
import Logo from "../components/logo.jsx";

function HomePage() {
  const dispatch = useChangeTheme();

  return (
    <div className={styles.main}>
      <Logo/>
      <h1 className="heading">
        Hi,{" "}
        <span
          className={styles.name}
          onClick={() => {
            dispatch();
          }}
        >
          I'm Stef,
        </span>
      </h1>
      <h1 className="heading">
        I <span className={styles.designTag}>design</span> and build{" "}
        <TextEffect
          letters={"ABCDEFGHIJKLMNOPQRSTUVWXYZ"}
          words={["Websites", "Mobile apps", "API's", "Backends", "Things"]}
        ></TextEffect>
      </h1>

      <p className="comment">//and I enjoy doing it :)</p>
    </div>
  );
}

export default HomePage;
