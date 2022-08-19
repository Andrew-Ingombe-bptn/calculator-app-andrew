import { styled } from "@mui/material";
import React from "react";

const DisplayContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  paddingRight: theme.spacing(1),
  paddingLeft: theme.spacing(1),
  height: "fit-content",
  width: "100%",
  fontSize: "2em",
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.main,
  aspectRatio: "2.1867",
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
      <Div>{operation}</Div>
      <p style={{ fontSize: currValue?.length > 12 ? "1rem" : "2rem" }}>
        {currValue}
      </p>
    </DisplayContainer>
  );
};

export default Display;
