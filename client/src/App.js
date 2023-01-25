import { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav";
import Game from "./components/Game/Game";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  const [randomWord, setRandomWord] = useState();

  useEffect(() => {
    fetch("https://extreme-wordie.onrender.com/words/random")
      .then((response) => response.json())
      .then((data) => setRandomWord(data.word));
  }, []);

  return (
    <div className="App">
      <Nav />
      <Game />
      <Keyboard />
    </div>
  );
}

export default App;
