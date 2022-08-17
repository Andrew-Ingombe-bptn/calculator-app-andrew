import React from "react";

type DigitProps = {
  digit: string;
  selectDigit: (digit: string) => void;
  xs?: number;
};

const Digits: React.FC<DigitProps> = ({ digit, selectDigit, xs = 3 }) => {
  return <div>Digits</div>;
};

export default Digits;
