import { useState, createContext } from "react";
import Board from "../Board/Board";
import Keyboard from "../Keyboard/Keyboard";

export const GameContext = createContext();

const Game = () => {
  const [attempts, setAttempts] = useState([...Array(5)]);
  const [currentAttempt, setCurrentAttempt] = useState("");
  const [round, setRound] = useState(0);

  console.log(attempts);

  return (
    <>
      <GameContext.Provider
        value={{
          attempts,
          currentAttempt,
          round,
          setCurrentAttempt,
          setAttempts,
          setRound
        }}
      >
        <Board />
        <Keyboard />
      </GameContext.Provider>
    </>
  );
};

export default Game;
