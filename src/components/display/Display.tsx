import { styled } from "@mui/material";
import React from "react";

const DisplayContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  paddingLeft: theme.spacing(1),
  height: "5rem",
  width: "100%",
  fontSize: "3rem",
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.main,
}));

const Div = styled("div")(({ theme }) => ({
  fontSize: "40px",
}));

type DisplayProps = {
  currValue: string;
  operation: string;
};

const Display: React.FC<DisplayProps> = ({
  currValue,
  operation,
}: DisplayProps) => {
  return (
    <DisplayContainer
      sx={{ border: 2, borderRadius: 1, borderColor: "#009688" }}
    >
      <Div>{operation}</Div> {currValue}
    </DisplayContainer>
  );
};

export default Display;
