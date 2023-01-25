import { useState } from "react";
import styles from "./Game.module.css";
import Keyboard from "../Keyboard/Keyboard";


const Game = () => {
  const [attempts, setAttempts] = useState([...Array(5)]);
  const [currentAttempt, setCurrentAttempt] = useState([]);

  return (
    <>
      {attempts.map(() => (
        <div className={styles.row}>
          <div className={styles.letter}>{currentAttempt[0]}</div>
          <div className={styles.letter}>{currentAttempt[1]}</div>
          <div className={styles.letter}>{currentAttempt[2]}</div>
          <div className={styles.letter}>{currentAttempt[3]}</div>
          <div className={styles.letter}>{currentAttempt[4]}</div>
          <div className={styles.letter}>{currentAttempt[5]}</div>
        </div>
      ))}
      <Keyboard />
    </>
  )
};

export default Game;
