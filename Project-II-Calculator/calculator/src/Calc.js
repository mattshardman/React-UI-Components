import React, { useState } from "react";
import "./App.css";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import Display from "./components/DisplayComponents/CalculatorDisplay";

const styles = {
  wrapper: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  btnWrapper: {
    width: 240,
    height: 240,
    display: "flex",
    flexWrap: "wrap"
  }
};

const Calc = () => {
  const [total, setTotal] = useState(0);
  const [expression, setExpression] = useState([]);
  const [prevResult, setPrevResult] = useState(0);

  const numberPressHandler = input => {
    const newExpression = [...expression, Number(input)];
    if (total && !isNaN(total)) {
      setTotal(`${total}${input}`);
      setExpression(newExpression);
      return null;
    }
    setTotal(input);
    setExpression(newExpression);
    return null;
  };

  const actionPressHandler = input => {
    const newExpression = [...expression, input];
    setTotal(input);
    setExpression(newExpression);
  };

  const clearHandler = () => {
    setTotal(null);
    setPrevResult(0);
    setExpression([]);
  };

  const resultHandler = () => {
    const expressionString = prevResult
      ? [prevResult, ...expression].join("")
      : expression.join("");
    const result = eval(expressionString);
    setPrevResult(result);
    setTotal(result);
    setExpression([]);
  };

  return (
    <section style={styles.wrapper}>
      <div style={{ border: "1px #484848 solid" }}>
        <Display result={total} />
        <div style={{ display: "flex" }}>
          <div>
            <ActionButton
              width={240}
              action="CLEAR"
              background="#fff"
              handler={() => clearHandler()}
            />
            <div style={styles.btnWrapper}>
              {[3, 2, 1, 6, 5, 4, 9, 8, 7].reverse().map(number => (
                <NumberButton
                  key={number}
                  number={number}
                  pressHandler={numberPressHandler}
                />
              ))}
            </div>
            <NumberButton
              number={0}
              width={240}
              pressHandler={numberPressHandler}
            />
          </div>
          <div>
            {["/", "*", "-", "+"].map(action => (
              <ActionButton
                key={action}
                action={action}
                handler={actionPressHandler}
              />
            ))}
            <ActionButton action="=" handler={resultHandler} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calc;
