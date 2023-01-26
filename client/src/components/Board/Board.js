import styles from "./Board.module.css";
import { useContext } from "react";
import { GameContext } from "../Game/Game";

const Board = () => {
  const {attempts} = useContext(GameContext);

  return (
    <>
      {attempts.map((attempt) => (
        <div className={styles.row}>
          <div className={styles.letter}>{attempt[0].letter}</div>
          <div className={styles.letter}>{attempt[1].letter}</div>
          <div className={styles.letter}>{attempt[2].letter}</div>
          <div className={styles.letter}>{attempt[3].letter}</div>
          <div className={styles.letter}>{attempt[4].letter}</div>
          <div className={styles.letter}>{attempt[5].letter}</div>
        </div>
      ))}
    </>
  );
};

export default Board;
