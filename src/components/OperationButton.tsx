import React from "react";
import { Grid, Button, styled } from "@mui/material";

type OperationProps = {
  operation: string;
  selectOperation: (operation: string) => void;
  selectedOperation: string;
};

const StyledButton = styled(Button)<{ selected: boolean }>((props) => ({
  backgroundColor: "crimson",
  border: props.selected ? "blue" : "red",
}));

const OperationButton: React.FC<OperationProps> = ({
  operation,
  selectOperation,
  selectedOperation,
}) => {
  return (
    <Grid item>
      <StyledButton
        variant="contained"
        fullWidth
        onClick={() => selectOperation(operation)}
        selected={selectedOperation === operation}
      >
        {operation}
      </StyledButton>
    </Grid>
  );
};

export default OperationButton;
