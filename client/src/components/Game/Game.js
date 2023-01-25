import { useState, createContext } from "react";
import styles from "./Game.module.css";
import Board from "../Board/Board";
import Keyboard from "../Keyboard/Keyboard";

export const GameContext = createContext();

const Game = () => {
  const [attempts, setAttempts] = useState([...Array(5)]);
  const [currentAttempt, setCurrentAttempt] = useState([]);

  return (
    <>
      <GameContext.Provider value={{ attempts, currentAttempt }}>
        <Board />
        <Keyboard />
      </GameContext.Provider>
    </>
  );
};

export default Game;
