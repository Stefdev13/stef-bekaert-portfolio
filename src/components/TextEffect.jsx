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

        const interval = setInterval(() => {
            let originalText = textEffectValue;
            let nextWord = words[currentIndex + 1 <= words.length - 1 ? currentIndex + 1 : 0];

            setTextEffectValue(
                textEffectValue
                    .split("")
                    .map((letter, index) => {
                        if (index < i) {
                            return nextWord[index];
                            //   return originalText[index];
                        }

                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("")
            );

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
        }, 20);
    }

    return (
        <div className={styles.textEffect} onMouseEnter={doEffect}>
            {textEffectValue}
        </div>
    );
}

export default TextEffect;
