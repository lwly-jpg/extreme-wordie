import styles from "./Board.module.css";
import { useContext } from "react";
import { GameContext } from "../Game/Game";
import Row from "./Row";

const Board = () => {
  const { attempts, round, currentAttempt } = useContext(GameContext);

  return (
    <>
      {attempts.map((attempt, index) => (
        index === round ? 
        <Row key={index} currentAttempt={currentAttempt} /> :
        <Row key={index} attempt={attempt} />
      ))}
    </>
  );
};

export default Board;
