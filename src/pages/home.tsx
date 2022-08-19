import { useState } from "react";
import styled from "styled-components";
import Calculator from "../components/Calculator";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #eee;
`;

const Home = () => {
  const [currValue, setCurrValue] = useState("0");
  const [operation, setOperation] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [overWrite, setOverWrite] = useState(true);

  // calculate function
  const calculate = () => {
    if (!prevValue || !operation) return currValue;
    const curr = parseFloat(currValue);
    const prev = parseFloat(prevValue);

    let result;

    switch (operation) {
      case "/":
        result = prev / curr;
        break;
      case "*":
        result = prev * curr;
        break;
      case "-":
        result = prev - curr;
        break;
      case "+":
        result = prev + curr;
        break;
    }

    return result;
  };

  // equal button
  const equals = () => {
    const val = calculate();

    console.log("value", val);
    setCurrValue(`${val}`);
    setPrevValue("");
    setOperation("");
    setOverWrite(true);
  };

  const selectDigit = (digit: string) => {
    if (currValue[0] === "0" && digit === "0") return;
    if (currValue.includes(".") && digit == ".") return;
    if (overWrite && digit !== ".") {
      setCurrValue(digit);
    } else {
      setCurrValue(`${currValue}${digit}`);
    }
    setOverWrite(false);
  };

  const selectOperation = (operation: string) => {
    if (prevValue) {
      const val = calculate();
      setCurrValue(`${val}`);
      setPrevValue(`${val}`);
    } else {
      setPrevValue(currValue);
    }
    setOperation(operation);
    setOverWrite(true);
  };

  // clear button
  // clear button
  const clear = () => {
    setPrevValue("");
    setOperation("");
    setCurrValue("0");
    setOverWrite(true);
  };

  // delete button
  const del = () => {
    setCurrValue("0");
    setOverWrite(true);
  };

  // percent button
  const percent = () => {
    const curr = parseFloat(currValue);
    setCurrValue((curr / 100).toString());
  };

  return (
    <Container>
      <Calculator
        selectDigit={selectDigit}
        selectOperation={selectOperation}
        operation={operation}
        currValue={currValue}
        clear={clear}
        del={del}
        percent={percent}
        equals={equals}
      />
    </Container>
  );
};

export default Home;
