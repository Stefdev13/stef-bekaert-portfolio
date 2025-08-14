import React from "react";
import { useState } from "react";

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
    <>
      <h1>
        Hi, <span>I'm Stef,</span>
      </h1>
      <h1>
        I <span>design</span> and build{" "}
        <div onMouseEnter={doEffect}>{textEffectValue}</div>
      </h1>
      <p>//and I enjoy doing it :)</p>
    </>
  );
}

export default HomePage;
