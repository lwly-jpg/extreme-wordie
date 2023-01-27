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
  const [win, setWin] = useState(false);

  useEffect(() => {
    if (round > 4) {
      setModal(true);
    }

    if (win) {
      setModal(true);
    }
  }, [win, round])

  return (
    <div className={styles.container}>
      <GameContext.Provider
        value={{
          todaysWord,
          attempts,
          currentAttempt,
          round,
          setCurrentAttempt,
          setAttempts,
          setRound,
          setWin
        }}
      >
        <Board />
        <Keyboard />
        {modal && <Modal win={win} />}
      </GameContext.Provider>
    </div>
  );
};

export default Game;
