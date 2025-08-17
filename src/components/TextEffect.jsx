import React, { useEffect } from "react";
import { useState } from "react";
import styles from "../components/TextEffect.module.css";

function TextEffect(props) {
  const letters = props.letters;
  const words = props.words;
  const [textEffectValue, setTextEffectValue] = useState("Frontend stuff");
  const [currentIndex, setcurrentIndex] = useState(0);

  //This useEffect hook will initiate the first effect and text value change after a delay of 2 seconds.
  //It has currentIndex as a dependency so that the function will be called again after the doEffect function is ran, creating the infinite loop we want to iterate of the words
  useEffect(() => {
    //Set a delay of 2 seconds
    const setDelay = setTimeout(() => {
      let nextWord =
        words[currentIndex + 1 <= words.length - 1 ? currentIndex + 1 : 0];

      doEffect(nextWord);
    }, 2000);

    return setDelay.close;
  }, [currentIndex]);

  //Function to create the effect
  function doEffect(nextWord) {
    let i = 0;

    //2 variables
    //Used to determine which word is the longer and to add extra letters if the next word is longer to smoothe out the animation
    let differenceInLetters;
    let newTextEffectValue;

    const interval = setInterval(() => {
      let originalText = textEffectValue;
      let newLetter = "";

      //Check if the difference in letters has been set, and set it if it hasnt
      if (differenceInLetters === undefined) {
        differenceInLetters = textEffectValue.length - nextWord.length;
      }

      //Check if the difference in letters has been set, and set it if it hasnt
      if (newTextEffectValue === undefined) {
        newTextEffectValue = textEffectValue;
      }

      //Get a new letter to add to the end of the textEffectValue if the difference in letters is negative, meaning the next word is longer than the current one
      //This is to smoothe out the animation: this adds 1 extra letter at a time, instead of slapping all the extra letters on at the end when we set the textEffectValue
      if (differenceInLetters < 0) {
        //Add a random letter from the array of letters to the textEffectValue
        newLetter = letters[Math.floor(Math.random() * letters.length)];
        differenceInLetters++;
      } else {
        newLetter = "";
      }

      //This map iterates over all the letters in the word and swaps them for a random letter from the letters provided in the props for this component
      newTextEffectValue = newTextEffectValue
        .split("")
        .map((letter, index) => {
          //This if smoothes out the landing of the animation: the left most letter will stop iterating first, then the second letter, third, ...
          if (index < i) {
            return nextWord[index];
          }

          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("")
        .concat(newLetter);

      setTextEffectValue(newTextEffectValue);

      //Determines when to end the effect and sets the state
      if (i >= originalText.length) {
        //Update the state
        setTextEffectValue(nextWord);
        setcurrentIndex(
          currentIndex + 1 <= words.length - 1 ? currentIndex + 1 : 0
        );

        //Clear the interval
        clearInterval(interval);
      }

      i += 1 / 2;
    }, 20);
  }

  return <div className={styles.textEffect}>&lt;{textEffectValue}/&gt;</div>;
}

export default TextEffect;
