import styles from "./Keyboard.module.css";
import { useContext } from "react";
import { GameContext } from "../Game/Game";

const Keyboard = () => {
  const { currentAttempt, setCurrentAttempt } = useContext(GameContext);
  const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const thirdRow = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyClick = (letter) => {
    setCurrentAttempt(prev =>
      (prev + letter))
    console.log(currentAttempt);
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
        <div className={styles.keyboard_letter}>&#x23CE;</div>
      </div>
    </div>
  );
};

export default Keyboard;
