import styles from "./Board.module.css";

const Row = ({ attempt }) => {
  return (
    <div className={styles.row}>
      <div className={styles.letter}>{attempt[0].letter}</div>
      <div className={styles.letter}>{attempt[1].letter}</div>
      <div className={styles.letter}>{attempt[2].letter}</div>
      <div className={styles.letter}>{attempt[3].letter}</div>
      <div className={styles.letter}>{attempt[4].letter}</div>
      <div className={styles.letter}>{attempt[5].letter}</div>
    </div>
  );
};

export default Row;
