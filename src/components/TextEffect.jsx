import React, { useEffect } from "react";
import { useState } from "react";
import styles from "../components/TextEffect.module.css";

function TextEffect(props) {
    const letters = props.letters;
    const words = props.words;
    const [textEffectValue, setTextEffectValue] = useState("Frontend stuff");
    const [currentIndex, setCurrentIndex] = useState(0);

    //Set the textEffectValue to the first word in the words property, only run on first render
    useEffect(() => {
        setTextEffectValue(words[currentIndex]);
    }, []);

    //Function to create the effect
    function doEffect() {
        let i = 0;

        //Used to determine which word is the longer and to add extra letters if the next word is longer to smoothe out the animation
        let differenceInLetters;

        const interval = setInterval(() => {
            let originalText = textEffectValue;
            let nextWord = words[currentIndex + 1 <= words.length - 1 ? currentIndex + 1 : 0];
            let newLetter = '';

            //Check if the difference in letters has been set, and set it if it hasnt
            if (differenceInLetters === undefined) {
                differenceInLetters = textEffectValue.length - nextWord.length;
            }

            //Get a new letter to add to the end of the textEffectValue if the difference in letters is negative (To smoothe out the animation)
            if (differenceInLetters < 0) {
                //Add a random letter from the array of letters to the textEffectValue
                newLetter = letters[Math.floor(Math.random() * letters.length)];
                differenceInLetters++;
            } else {
                newLetter = '';
            }

            let newTextEffectValue = textEffectValue
                .split("")
                .map((letter, index) => {
                    if (index < i) {
                        return nextWord[index];
                    }

                    return letters[Math.floor(Math.random() * letters.length)];
                })
                .join("").concat(newLetter);

            console.log(`newTextEffectValue: ${newTextEffectValue}`);

            setTextEffectValue(newTextEffectValue);

            //Randomize the letters and progressively reveal letters from the new word starting from the left-most letter
            // setTextEffectValue(
            //     textEffectValue
            //         .split("")
            //         .map((letter, index) => {
            //             if (index < i) {
            //                 return nextWord[index];
            //             }

            //             return letters[Math.floor(Math.random() * letters.length)];
            //         })
            //         .join("")
            // );

            // console.log(`textEffectValue: ${textEffectValue}`);
            // console.log(`newLetter: ${newLetter}`);

            // setTextEffectValue(textEffectValue => textEffectValue + newLetter);

            if (i >= originalText.length) {
                //Set the new index. If we are at the end of the array, set the newIndex to 0
                const newIndex =
                    currentIndex + 1 <= words.length - 1 ? currentIndex + 1 : 0;

                //Update the state
                setCurrentIndex(newIndex);
                setTextEffectValue(words[newIndex]);

                //Clear the interval
                clearInterval(interval);
            }

            i += 1 / 2;
        }, 100);
    }

    return (
        <div className={styles.textEffect} onMouseEnter={doEffect}>
            {textEffectValue}
        </div>
    );
}

export default TextEffect;
