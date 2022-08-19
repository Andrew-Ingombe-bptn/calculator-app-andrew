import React from "react";
import { Grid, Button } from "@mui/material";

type DigitProps = {
  digit: string;
  selectDigit: (digit: string) => void;
  xs?: number;
};

const DigitButton: React.FC<DigitProps> = ({ digit, selectDigit, xs = 3 }) => {
  return (
    <Grid item xs={xs}>
      <Button variant="contained" fullWidth onClick={() => selectDigit(digit)}>
        {digit}
      </Button>
    </Grid>
  );
};

export default DigitButton;
