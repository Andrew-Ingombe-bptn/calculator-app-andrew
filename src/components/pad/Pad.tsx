import { Grid, Button } from "@mui/material";
import DigitButton from "../digit_button/DigitButton";
import OperationButton from "../operation_button/OperationButton";

type PadProps = {
  selectOperation: (operation: string) => void;
  selectDigit: (digit: string) => void;
  operation: string;
  clear: () => void;
  del: () => void;
  percent: () => void;
  equals: () => void;
};

const Pad = ({
  selectOperation,
  operation,
  selectDigit,
  clear,
  del,
  percent,
  equals,
}: PadProps) => {
  return (
    <Grid container spacing={1}>
      <Grid item container columnSpacing={1}>
        <OperationButton
          operation="AC"
          selectOperation={clear}
          selectedOperation={operation}
        />
        <OperationButton
          operation="C"
          selectOperation={del}
          selectedOperation={operation}
        />
        <OperationButton
          operation="%"
          selectOperation={percent}
          selectedOperation={operation}
        />
        <OperationButton
          operation="/"
          selectOperation={selectOperation}
          selectedOperation={operation}
        />
      </Grid>

      <Grid item container columnSpacing={1}>
        <DigitButton digit="7" selectDigit={selectDigit} />
        <DigitButton digit="8" selectDigit={selectDigit} />
        <DigitButton digit="9" selectDigit={selectDigit} />
        <OperationButton
          operation="*"
          selectOperation={selectOperation}
          selectedOperation={operation}
        />
      </Grid>
      <Grid item container columnSpacing={1}>
        <DigitButton digit="4" selectDigit={selectDigit} />
        <DigitButton digit="5" selectDigit={selectDigit} />
        <DigitButton digit="6" selectDigit={selectDigit} />
        <OperationButton
          operation="-"
          selectOperation={selectOperation}
          selectedOperation={operation}
        />
      </Grid>
      <Grid item container columnSpacing={1}>
        <DigitButton digit="1" selectDigit={selectDigit} />
        <DigitButton digit="2" selectDigit={selectDigit} />
        <DigitButton digit="3" selectDigit={selectDigit} />
        <OperationButton
          operation="+"
          selectOperation={selectOperation}
          selectedOperation={operation}
        />
      </Grid>

      <Grid item container columnSpacing={1}>
        <DigitButton digit="0" selectDigit={selectDigit} />
        <DigitButton digit="." selectDigit={selectDigit} />
        <Grid item xs={6}>
          <Button fullWidth variant="contained" onClick={equals}>
            =
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Pad;
