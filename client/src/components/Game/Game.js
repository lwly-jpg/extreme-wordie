import { useState } from "react";
import styles from "./Game.module.css";

const Game = () => {
  const [attempts, setAttempts] = useState([...Array(5)]);

  return (
    <>
      {attempts.map(() => (
        <div className={styles.row}>
          <div className={styles.letter}>a</div>
          <div className={styles.letter}>b</div>
          <div className={styles.letter}>c</div>
          <div className={styles.letter}>d</div>
          <div className={styles.letter}>e</div>
          <div className={styles.letter}>f</div>
        </div>
      ))}
    </>
  )
};

export default Game;
