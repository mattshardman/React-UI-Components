import React, { Component } from "react";
import "./App.css";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import Display from "./components/DisplayComponents/CalculatorDisplay";

const styles = {
  calcWrapper: {
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

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      expression: [],
      prevResult: 0
    };
  }

  numberPressHandler(input) {
    const { expression } = this.state;
    const newExpression = [...expression, Number(input)];
    this.setState({ total: input, expression: newExpression });
  }

  actionPressHandler(input) {
    const { expression } = this.state;
    const newExpression = [...expression, input];
    this.setState({ total: input, expression: newExpression });
  }

  clearHandler() {
    this.setState({
      prevResult: 0,
      total: 0,
      expression: []
    });
  }

  resultHandler() {
    const { prevResult, expression } = this.state;
    const expressionString = prevResult
      ? [prevResult, ...expression].join("")
      : expression.join("");
    const result = eval(expressionString);
    this.setState({ prevResult: result, total: result, expression: [] });
  }

  render() {
    const { total } = this.state;
    return (
      <div style={styles.calcWrapper}>
        <div style={{ border: "1px #484848 solid" }}>
          <Display result={total} />
          <div style={{ display: "flex" }}>
            <div>
              <ActionButton
                width={240}
                action="CLEAR"
                background="#fff"
                handler={() => this.clearHandler()}
              />
              <div style={styles.btnWrapper}>
                {[3, 2, 1, 6, 5, 4, 9, 8, 7].reverse().map(number => (
                  <NumberButton
                    key={number}
                    number={number}
                    pressHandler={this.numberPressHandler.bind(this)}
                  />
                ))}
              </div>
              <NumberButton
                number={0}
                width={240}
                pressHandler={this.numberPressHandler.bind(this)}
              />
            </div>
            <div>
              {["/", "*", "-", "+"].map(action => (
                <ActionButton
                  key={action}
                  action={action}
                  handler={this.actionPressHandler.bind(this)}
                />
              ))}
              <ActionButton
                action="="
                handler={this.resultHandler.bind(this)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
