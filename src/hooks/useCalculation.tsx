import { useState } from "react";

export const useCalculation = () => {
  const [currValue, setCurrValue] = useState(
    localStorage.getItem("currValue") || "0"
  );
  const [operation, setOperation] = useState(
    localStorage.getItem("operation") || ""
  );
  const [prevValue, setPrevValue] = useState(
    localStorage.getItem("prevValue") || ""
  );
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

    // clear state values from local storage
    localStorage.setItem("currValue", "0");
    localStorage.setItem("operation", "");
    localStorage.setItem("prevValue", "");

    return result;
  };

  // equal button
  const equals = () => {
    const val = calculate();
    localStorage.setItem("currValue", `${val}`);
    setCurrValue(`${val}`);
    setPrevValue("");
    setOperation("");
    setOverWrite(true);
  };

  // select digit
  const selectDigit = (digit: string) => {
    if (currValue === "0" && digit === "0") return;

    if (currValue.includes(".") && digit == ".") {
      return;
    }

    if (overWrite && digit !== ".") {
      localStorage.setItem("currValue", digit);

      setCurrValue(digit);
    } else {
      localStorage.setItem("currValue", `${currValue}${digit}`);
      setCurrValue(`${currValue}${digit}`);
    }
    setOverWrite(false);
  };

  //   select operation
  const selectOperation = (operation: string) => {
    if (currValue === "0" && !prevValue) return;

    if (prevValue) {
      const val = calculate();
      localStorage.setItem("prevValue", `${val}`);
      setPrevValue(`${val}`);
    } else {
      localStorage.setItem("prevValue", currValue);
      setPrevValue(currValue);
    }

    setCurrValue(`${0}`);
    setOperation(operation);
    localStorage.setItem("operation", operation);
    localStorage.setItem("currValue", `${0}`);
    setOverWrite(true);
  };

  // clear button
  const clear = () => {
    setPrevValue("");
    setOperation("");
    setCurrValue("0");
    setOverWrite(true);

    // clear state values from local storage
    localStorage.setItem("currValue", "0");
    localStorage.setItem("operation", "");
    localStorage.setItem("prevValue", "");
  };

  // delete button
  const del = () => {
    if (currValue.length > 0) {
      let newCurrValue = currValue.slice(0, -1);
      if (!newCurrValue) {
        newCurrValue = "0";
      }
      setCurrValue(newCurrValue);
      localStorage.setItem("currValue", newCurrValue);
    }
    setOverWrite(true);
  };

  // percent button
  const percent = () => {
    const curr = parseFloat(currValue);
    localStorage.setItem("currValue", (curr / 100).toString());
    setCurrValue((curr / 100).toString());
  };

  // Negation function
  function negate(currValue: string) {
    if (currValue === "0") {
      return "0";
    } else if (currValue[0] === "-") {
      return currValue.replace("-", "");
    } else return "-" + currValue;
  }

  //invert button
  const invertButton = () => {
    setCurrValue(negate(currValue).toString());
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
    invertButton,
  };
};
