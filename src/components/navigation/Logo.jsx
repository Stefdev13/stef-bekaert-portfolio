import React, { useState } from "react";
import styles from "./Logo.module.css";
import { useNavigate, useLocation } from "react-router";

function Logo() {
  let navigate = useNavigate();
  const location = useLocation();

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // const baseText = screen.width >= 992 ? "stef.bekaert" : "s.b";
  // const hoverText = screen.width >= 992 ? "homepage" : "home";

  const [baseText, setBaseText] = useState(
    screen.width >= 992 ? "stef.bekaert" : "s.b"
  );
  const [hoverText, setHoverText] = useState(
    screen.width >= 992 ? "homepage" : "home"
  );
  const [text, setText] = useState(
    screen.width >= 992 ? "stef.bekaert" : "s.b"
  );

  window.addEventListener(
    "resize",
    function () {
      setBaseText(screen.width >= 992 ? "stef.bekaert" : "s.b");
      setHoverText(screen.width >= 992 ? "homepage" : "home");
      setText(baseText);
    },
    true
  );

  function onMouseEnter() {
    if (text !== hoverText) {
      doEffect(hoverText);
    }
  }

  function onMouseLeave() {
    if (text !== baseText) {
      doEffect(baseText);
    }
  }

  function doEffect(newWord) {
    if (location.pathname !== "/") {
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
