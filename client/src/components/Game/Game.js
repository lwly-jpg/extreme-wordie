import { useState, createContext } from "react";
import styles from "./Game.module.css";
import Board from "../Board/Board";
import Keyboard from "../Keyboard/Keyboard";

export const GameContext = createContext();

const Game = ({todaysWord}) => {
  const [attempts, setAttempts] = useState([...Array(5)].fill([...Array(6)].fill({letter: "", result: null})));
  const [currentAttempt, setCurrentAttempt] = useState("");
  const [round, setRound] = useState(0);

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
      </GameContext.Provider>
    </div>
  );
};

export default Game;
