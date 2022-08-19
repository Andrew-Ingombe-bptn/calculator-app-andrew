import { useState } from "react";

export const useCalculation = () => {
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
    setCurrValue(`${val}`);
    setPrevValue("");
    setOperation("");
    setOverWrite(true);
  };

  // select digit
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

  //   select operation
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

  return {
    currValue,
    setCurrValue,
    operation,
    setOperation,
    prevValue,
    setPrevValue,
    overWrite,
    setOverWrite,
    calculate,
    equals,
    selectDigit,
    selectOperation,
    clear,
    del,
    percent,
  } as const;
};
