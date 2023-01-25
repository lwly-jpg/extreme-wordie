import styles from "./Keyboard.module.css";

const Keyboard = () => {
  const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const thirdRow = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyClick = (letter) => {
    console.log(letter);
  }

  return (
    <div className={styles.keyboard}>
      <div className={styles.keyboard_row}>
        {firstRow.map((letter) => (
          <div className={styles.keyboard_letter} onClick={() => handleKeyClick(letter)}>{letter}</div>
        ))}
      </div>
      <div className={styles.keyboard_row}>
        {secondRow.map((letter) => (
          <div className={styles.keyboard_letter} onClick={() => handleKeyClick(letter)}>{letter}</div>
        ))}
      </div>
      <div className={styles.keyboard_row}>
        <div className={styles.keyboard_letter}>&#x232B;</div>
        {thirdRow.map((letter) => (
          <div className={styles.keyboard_letter} onClick={() => handleKeyClick(letter)}>{letter}</div>
        ))}
        <div className={styles.keyboard_letter}>&#x23CE;</div>
      </div>
    </div>
  );
};

export default Keyboard;
