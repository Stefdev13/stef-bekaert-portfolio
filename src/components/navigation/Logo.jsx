import React, { useState } from "react";
import styles from "./Logo.module.css";
import { useNavigate } from "react-router";

function Logo() {
  let navigate = useNavigate();

  const [text, setText] = useState("stef.bekaert");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  function onMouseEnter() {
    if (text !== "homepage") {
      doEffect("homepage");
    }
  }

  function onMouseLeave() {
    if (text !== "stef.bekaert") {
      doEffect("stef.bekaert");
    }
  }

  function doEffect(newWord) {
    let i = 0;

    //2 variables
    //Used to determine which word is the longer and to add extra letters if the next word is longer to smoothe out the animation
    let differenceInLetters;
    let newTextValue;

    const interval = setInterval(() => {
      let originalText = text;
      let newLetter = "";

      //Check if the difference in letters has been set, and set it if it hasnt
      if (differenceInLetters === undefined) {
        differenceInLetters = text.length - newWord.length;
      }

      //Check if the difference in letters has been set, and set it if it hasnt
      if (newTextValue === undefined) {
        newTextValue = text;
      }

      //Get a new letter to add to the end of the text if the difference in letters is negative (To smoothe out the animation)
      if (differenceInLetters < 0) {
        //Add a random letter from the array of letters to the text
        newLetter = letters[Math.floor(Math.random() * letters.length)];
        differenceInLetters++;
      } else {
        newLetter = "";
      }

      newTextValue = newTextValue
        .split("")
        .map((letter, index) => {
          if (index < i) {
            return newWord[index];
          }

          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("")
        .concat(newLetter);

      setText(newTextValue);

      if (i >= originalText.length) {
        //Update the state
        setText(newWord);

        //Clear the interval
        clearInterval(interval);
      }

      i += 1 / 2;
    }, 10);
  }

  return (
    <div
      className={styles.logo}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => {
        navigate("/");
      }}
    >
      &lt;{text}/&gt;
    </div>
  );
}

export default Logo;
