import { useState } from "react";
import Game from "./components/Game";
import Start from "./components/Start";
import GlobalStyles from "./GlobalStyles";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <>
      {started ? <Game /> : <Start startGame={setStarted}/>}
      <GlobalStyles />
    </>
  );
}

export default App;
