import styles from "./Keyboard.module.css";
import { useContext } from "react";
import { GameContext } from "../Game/Game";

const Keyboard = () => {
  const { currentAttempt, setCurrentAttempt, attempts, setAttempts, round, setRound, todaysWord } =
    useContext(GameContext);
  const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const thirdRow = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyClick = (letter) => {
    if (currentAttempt.length === 6) {
      return;
    }
    setCurrentAttempt((prev) => prev + letter);
  };

  const handleReturn = (event) => {
    event.preventDefault();
    if (round > 4) {
      console.log("Game is over")
      return;
    } 

    if (currentAttempt.length !== 6) {
      return;
    }

    setAttempts((prevAttempts) => {
      let newAttempts = [...prevAttempts];
      

      const formattedAttempt = [...currentAttempt].map((letter, index) => {
        if (letter.toLowerCase() === todaysWord[index]) {
          return {letter: letter, colour: "correct"}
        } else if ([...todaysWord].includes(letter.toLowerCase())) {
          return {letter: letter, colour: "almost"}
        } else {
          return {letter: letter, colour: "incorrect"}
        }
      })

      console.log(formattedAttempt)


      newAttempts[round] = formattedAttempt;
      return newAttempts;
    });

    // console.log(attempts)

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
            className={styles.keyboard_letter}
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
        <div className={styles.keyboard_letter}>&#x232B;</div>
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
