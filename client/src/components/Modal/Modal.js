import style from "./Modal.module.css";

const Modal = ({ win }) => {
  return (
    <div className={style.container}>
      {win ? (
        <div className={style.popup}>
          <h1 className={style.win}>You won!</h1>
          <h2 className={style.word}>Word: XXX</h2>
          <p className={style.text}>You got it in X / 5 attempts!</p>
        </div>
      ) : (
        <div className={style.popup}>
          <h1 className={style.loss}>Next time!</h1>
          <h2 className={style.word}>Word: XXX</h2>
          <p className={style.text}>You used up all 5 attempts!</p>
        </div>
      )}
    </div>
  );
};

export default Modal;
