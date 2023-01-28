import styles from "./Keyboard.module.css";
import { useState, useContext } from "react";
import { GameContext } from "../Game/Game";

const Keyboard = () => {
  const {
    todaysWord,
    currentAttempt,
    round,
    usedLetters,
    setUsedLetters,
    setCurrentAttempt,
    setAttempts,
    setRound,
    setWin,
  } = useContext(GameContext);

  const firstRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const secondRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const thirdRow = ["z", "x", "c", "v", "b", "n", "m"];

  const handleKeyClick = (letter) => {
    if (currentAttempt.length === 6) {
      return;
    }
    setCurrentAttempt((prev) => prev + letter);
  };

  const handleBackspace = (event) => {
    event.preventDefault();

    setCurrentAttempt((prev) => prev.slice(0, -1));
  };

  const handleReturn = (event) => {
    event.preventDefault();

    if (currentAttempt === todaysWord) {
      setWin(true);
    }

    if (round > 4) {
      console.log("Game is over");
      return;
    }

    if (currentAttempt.length !== 6) {
      return;
    }

    setAttempts((prevAttempts) => {
      let newAttempts = [...prevAttempts];

      const formattedAttempt = [...currentAttempt].map((letter, index) => {
        if (letter === todaysWord[index]) {
          setUsedLetters({...usedLetters, [letter]: "correct" })
          return { letter: letter, result: "correct" };
        } else if ([...todaysWord].includes(letter)) {
          return { letter: letter, result: "almost" };
        } else {
          return { letter: letter, result: "incorrect" };
        }
      });

      newAttempts[round] = formattedAttempt;
      return newAttempts;
    });

    setCurrentAttempt("");

    setRound((prevRound) => {
      return prevRound + 1;
    });
  };

  return (
    <div className={styles.keyboard}>
      <div className={styles.keyboard_row}>
        {firstRow.map((letter) => (
          <div
            key={letter}
            className={styles[usedLetters[letter]] || styles.keyboard_letter}
            onClick={() => handleKeyClick(letter)}
          >
            {letter}
          </div>
        ))}
      </div>
      <div className={styles.keyboard_row}>
        {secondRow.map((letter) => (
          <div
            key={letter}
            className={styles.keyboard_letter}
            onClick={() => handleKeyClick(letter)}
          >
            {letter}
          </div>
        ))}
      </div>
      <div className={styles.keyboard_row}>
        <div className={styles.keyboard_letter} onClick={handleBackspace}>
          &#x232B;
        </div>
        {thirdRow.map((letter) => (
          <div
            key={letter}
            className={styles.keyboard_letter}
            onClick={() => handleKeyClick(letter)}
          >
            {letter}
          </div>
        ))}
        <div className={styles.keyboard_letter} onClick={handleReturn}>
          &#x23CE;
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
