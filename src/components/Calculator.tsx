import styled from "styled-components";
import Pad from "./Pad";
import Display from "./Display";

const CalculatorWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 16px;
  border-radius: 5px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Calculator = () => {
  return (
    <CalculatorWrapper>
      <Display />
      <Pad />
    </CalculatorWrapper>
  );
};

export default Calculator;
