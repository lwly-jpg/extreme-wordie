import { useState, createContext } from "react";
import Board from "../Board/Board";
import Keyboard from "../Keyboard/Keyboard";

export const GameContext = createContext();

const Game = () => {
  const [attempts, setAttempts] = useState([...Array(5)]);
  const [currentAttempt, setCurrentAttempt] = useState("");

  console.log(attempts)

  return (
    <>
      <GameContext.Provider
        value={{ attempts, currentAttempt, setCurrentAttempt, setAttempts }}
      >
        <Board />
        <Keyboard />
      </GameContext.Provider>
    </>
  );
};

export default Game;
