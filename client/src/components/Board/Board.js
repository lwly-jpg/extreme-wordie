import styles from "./Board.module.css";
import { useContext } from "react";
import { GameContext } from "../Game/Game";

const Board = () => {
  const {attempts, currentAttempt} = useContext(GameContext);
  return (
    <>
      {attempts.map(() => (
        <div className={styles.row}>
          <div className={styles.letter}></div>
          <div className={styles.letter}></div>
          <div className={styles.letter}></div>
          <div className={styles.letter}></div>
          <div className={styles.letter}></div>
          <div className={styles.letter}></div>
        </div>
      ))}
    </>
  );
};

export default Board;
