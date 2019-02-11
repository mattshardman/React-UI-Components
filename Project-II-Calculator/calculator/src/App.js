import React from "react";
import "./App.css";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import Display from "./components/DisplayComponents/CalculatorDisplay";

const App = () => {
  return (
    <div>
      <Display result={0} />
      <div style={{ display: "flex" }}>
        <div>
          <ActionButton width={240} action="CLEAR" background="#fff" />
          <div
            style={{
              width: 240,
              height: 240,
              display: "flex",
              flexWrap: "wrap"
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].reverse().map(number => (
              <NumberButton number={number} />
            ))}
          </div>
          <NumberButton number={0} width={240} />
        </div>
        <div>
          {["/", "x", "-", "+", "="].map(action => (
            <ActionButton action={action} />
          ))}
        </div>
      </div>
      <h3>Welcome to React Calculator</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
    </div>
  );
};

export default App;
