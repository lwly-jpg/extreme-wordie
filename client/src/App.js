import { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav";
import Game from "./components/Game/Game";

function App() {
  const [todaysWord, setTodaysWord] = useState();

  useEffect(() => {
    fetch("https://extreme-wordie.onrender.com/words/today")
      .then((response) => response.json())
      .then((data) => setTodaysWord(data.word));
  }, []);

  return (
    <div className="App">
      <Nav />
      <Game todaysWord={todaysWord} />
    </div>
  );
}

export default App;
