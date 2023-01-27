import styles from "./Board.module.css";

const Row = ({ attempt, currentAttempt }) => {
  if (attempt) {
    return (
      <div className={styles.row}>
        {attempt.map((tile, index) => (
          <div key={index} className={styles[tile.result] || styles.letter}>
            {tile.letter}
          </div>
        ))}
      </div>
    );
  }

  if (currentAttempt) {
    const tiles = currentAttempt.split("");

    return (
      <div className={styles.row}>
        {tiles.map((tile, index) => (
          <div key={index} className={styles.letter}>
            {tile}
          </div>
        ))}
        {[...Array(6 - currentAttempt.length)].map((_, index) => (
          <div key={index} className={styles.letter}></div>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.row}>
      <div className={styles.letter}></div>
      <div className={styles.letter}></div>
      <div className={styles.letter}></div>
      <div className={styles.letter}></div>
      <div className={styles.letter}></div>
      <div className={styles.letter}></div>
    </div>
  );
};

export default Row;
