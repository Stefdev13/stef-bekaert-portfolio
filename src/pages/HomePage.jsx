import React from "react";
import { useState } from "react";
import styles from "./HomePage.module.css";

function HomePage() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [textEffectValue, setTextEffectValue] = useState("Frontend stuff");

  function doEffect() {
    let i = 0;

    const interval = setInterval(() => {
      let originalText = textEffectValue;

      setTextEffectValue(
        textEffectValue
          .split("")
          .map((letter, index) => {
            if (index < i) {
              return originalText[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (i >= originalText.length) {
        clearInterval(interval);
        setTextEffectValue(originalText);
      }

      i += 1 / 2;
    }, 20);
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>
        Hi, <span className={styles.name}>I'm Stef,</span>
      </h1>
      <h1 className={styles.heading}>
        I <span>design</span> and build{" "}
        <div className={styles.textEffect} onMouseEnter={doEffect}>
          {textEffectValue}
        </div>
      </h1>
      <p className={styles.comment}>//and I enjoy doing it :)</p>
    </div>
  );
}

export default HomePage;
