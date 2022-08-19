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

  const selectDigit = (digit: string) => {
    setCurrValue(digit);
  };

  const selectOperation = (operation: string) => {
    setOperation(operation);
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
      />
    </Container>
  );
};

export default Home;
