import styles from "./Board.module.css";
import { useContext } from "react";
import { GameContext } from "../Game/Game";
import Row from "./Row";

const Board = () => {
  const {attempts} = useContext(GameContext);

  return (
    <>
      {attempts.map((attempt) => (
        <Row attempt={attempt} />
      ))}
    </>
  );
};

export default Board;
