import { useContext } from "react";
import { GameContext } from "../components/Game/Game";

const useKeyboard = () => {
  const {
    todaysWord,
    currentAttempt,
    round,
    usedLetters,
    setUsedLetters,
    setCurrentAttempt,
    setAttempts,
    setRound,
    setWin,
  } = useContext(GameContext);

  const handleKeyClick = (letter) => {
    if (currentAttempt.length === 6) {
      return;
    }
    setCurrentAttempt((prev) => prev + letter);
  };

  const handleBackspace = (event) => {
    event.preventDefault();

    setCurrentAttempt((prev) => prev.slice(0, -1));
  };

  const handleReturn = (event) => {
    event.preventDefault();

    if (currentAttempt === todaysWord) {
      setWin(true);
    }

    if (round > 4) {
      console.log("Game is over");
      return;
    }

    if (currentAttempt.length !== 6) {
      return;
    }

    setAttempts((prevAttempts) => {
      let newAttempts = [...prevAttempts];

      const formattedAttempt = [...currentAttempt].map((letter, index) => {
        if (letter === todaysWord[index]) {
          setUsedLetters((prev) => ({ ...prev, [letter]: "correct" }));
          return { letter: letter, result: "correct" };
        } else if ([...todaysWord].includes(letter)) {
          if (usedLetters[letter] !== "correct") {
            setUsedLetters((prev) => ({ ...prev, [letter]: "almost" }));
          }
          return { letter: letter, result: "almost" };
        } else {
          if (
            usedLetters[letter] !== "correct" &&
            usedLetters[letter] !== "almost"
          ) {
            setUsedLetters((prev) => ({ ...prev, [letter]: "incorrect" }));
          }
          return { letter: letter, result: "incorrect" };
        }
      });

      newAttempts[round] = formattedAttempt;
      return newAttempts;
    });

    setCurrentAttempt("");

    setRound((prevRound) => {
      return prevRound + 1;
    });
  };

  return { handleKeyClick, handleBackspace, handleReturn };
};

export default useKeyboard;
