import { useState, createContext } from "react";
import Board from "../Board/Board";
import Keyboard from "../Keyboard/Keyboard";

export const GameContext = createContext();

const Game = ({todaysWord}) => {
  const [attempts, setAttempts] = useState([...Array(5)]);
  const [currentAttempt, setCurrentAttempt] = useState("");
  const [round, setRound] = useState(0);

  return (
    <>
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
    </>
  );
};

export default Game;
