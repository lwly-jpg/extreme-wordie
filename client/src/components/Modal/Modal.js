import style from "./Modal.module.css";
import { useState } from "react";

const Modal = ({ win, word, round }) => {
  const [confirmation, setConfirmation] = useState(false);

  const handleShare = async (event) => {
    event.preventDefault();
    
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText("Testingggg");
        setConfirmation(true);
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
          <div className={style.share_button}>Share Result</div>
        </div>
      ) : (
        <div className={style.popup}>
          <h1 className={style.loss}>Next time!</h1>
          <h2 className={style.answer}>
            Word: <span className={style.word}>{word}</span>
          </h2>
          <p className={style.text}>You used up all 5 attempts!</p>
          {confirmation && <div>Copied to clipboard!</div>}
          <div className={style.share_button} onClick={() => handleShare}>
            Share Result
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
