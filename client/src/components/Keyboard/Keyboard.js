import styles from "./Keyboard.module.css";
import { useContext } from "react";
import { GameContext } from "../Game/Game";
import useKeyboard from "../../hooks/useKeyboard";

const Keyboard = () => {
  const { usedLetters } = useContext(GameContext);
  const { handleKeyClick, handleBackspace, handleReturn } = useKeyboard();

  const firstRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const secondRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const thirdRow = ["z", "x", "c", "v", "b", "n", "m"];

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
            className={styles[usedLetters[letter]] || styles.keyboard_letter}
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
            className={styles[usedLetters[letter]] || styles.keyboard_letter}
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
