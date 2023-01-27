import { useState, createContext, useEffect } from "react";
import styles from "./Game.module.css";
import Board from "../Board/Board";
import Keyboard from "../Keyboard/Keyboard";
import Modal from "../Modal/Modal"

export const GameContext = createContext();

const Game = ({todaysWord}) => {
  const [attempts, setAttempts] = useState([...Array(5)].fill([...Array(6)].fill({letter: "", result: null})));
  const [currentAttempt, setCurrentAttempt] = useState("");
  const [round, setRound] = useState(0);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (round > 4) {
      setModal(true);
    }
  }, [round])

  return (
    <div className={styles.container}>
      <GameContext.Provider
        value={{
          attempts,
          currentAttempt,
          round,
          setCurrentAttempt,
          setAttempts,
          setRound,
          todaysWord
        }}
      >
        <Board />
        <Keyboard />
        {modal && <Modal />}
      </GameContext.Provider>
    </div>
  );
};

export default Game;
