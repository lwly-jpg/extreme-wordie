import style from "./Modal.module.css";
import { useState } from "react";

const Modal = ({ win, word, round, attempts }) => {
  const [confirmation, setConfirmation] = useState(false);

  const formatAttempts = () => {
    const date = new Date().toDateString();
    const formatted = attempts
      .map((attempt) => {
        return attempt
          .map((letter) => {
            if (letter.result === "correct") {
              return String.fromCodePoint(0x1f7e9);
            } else if (letter.result === "almost") {
              return String.fromCodePoint(0x1f7e7);
            } else if (letter.result === "incorrect") {
              return String.fromCodePoint(0x2b1b);
            }
            return "";
          })
          .join("");
      })
      .join("\n");
    return `Extreme Wordie ${round}/5\n${date}\n${formatted}`;
  };

  const handleShare = async (event) => {
    event.preventDefault();

    try {
      if (navigator.clipboard) {
        setConfirmation(true);
        const result = formatAttempts();
        await navigator.clipboard.writeText(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.container}>
      {win ? (
        <div className={style.popup}>
          <h1 className={style.win}>You won!</h1>
          <h2 className={style.answer}>
            Word: <span className={style.word}>{word}</span>
          </h2>
          <p className={style.text}>You got it in {round} / 5 attempts!</p>
          <div className={style.share_button} onClick={handleShare}>
            Share Result
          </div>
          {confirmation && <div>Copied to clipboard</div>}
        </div>
      ) : (
        <div className={style.popup}>
          <h1 className={style.loss}>Next time!</h1>
          <h2 className={style.answer}>
            Word: <span className={style.word}>{word}</span>
          </h2>
          <p className={style.text}>You used up all 5 attempts!</p>
          <div className={style.share_button} onClick={handleShare}>
            Share Result
          </div>
          {confirmation && <div>Copied to clipboard</div>}
        </div>
      )}
    </div>
  );
};

export default Modal;
