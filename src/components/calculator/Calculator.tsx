import styled from "styled-components";
import Pad from "../pad/Pad";
import Display from "../display/Display";

const CalculatorWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 16px;
  border-radius: 5px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 16px;
  border: 2px solid #009688;
`;

type CalculatorProps = {
  selectDigit: (digit: string) => void;
  selectOperation: (operation: string) => void;
  operation: string;
  currValue: string;
  clear: () => void;
  del: () => void;
  percent: () => void;
  equals: () => void;
  invertButton: () => void;
};

const Calculator = ({
  selectDigit,
  selectOperation,
  operation,
  currValue,
  clear,
  del,
  percent,
  equals,
  invertButton,
}: CalculatorProps) => {
  return (
    <CalculatorWrapper>
      <Display currValue={currValue} operation={operation} />
      <Pad
        selectOperation={selectOperation}
        selectDigit={selectDigit}
        operation={operation}
        clear={clear}
        del={del}
        percent={percent}
        equals={equals}
        invertButton={invertButton}
      />
    </CalculatorWrapper>
  );
};

export default Calculator;
