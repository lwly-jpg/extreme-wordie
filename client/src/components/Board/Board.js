import styles from "./Board.module.css";
import { useContext } from "react";
import { GameContext } from "../Game/Game";

const Board = () => {
  const {attempts, currentAttempt} = useContext(GameContext);
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
    </>
  );
};

export default Board;
