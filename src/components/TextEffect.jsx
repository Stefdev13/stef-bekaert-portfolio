import React from "react";
import { useState } from "react";
import styles from "../components/TextEffect.module.css";

function TextEffect() {
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
    <div className={styles.textEffect} onMouseEnter={doEffect}>
      {textEffectValue}
    </div>
  );
}

export default TextEffect;
