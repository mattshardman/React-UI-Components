import React from "react";
import Calc from "./Calc";
import TickyToe from "./components/TicTacToe/TickyToe";

const App = () => {
  return (
    <React.Fragment>
      <Calc />
      <TickyToe />
    </React.Fragment>
  );
};

export default App;
