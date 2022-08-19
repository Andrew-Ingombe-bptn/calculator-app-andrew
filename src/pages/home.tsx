import styled from "styled-components";
import Calculator from "../components/calculator/Calculator";
import { useCalculation } from "../hooks/useCalculation";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #eee;
`;

const Home = () => {
  const {
    percent,
    currValue,
    operation,
    del,
    clear,
    selectOperation,
    selectDigit,
    equals,
  } = useCalculation();

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
