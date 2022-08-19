import { styled } from "@mui/material";
import React from "react";

const DisplayContainer = styled("div")(({ theme }) => ({
  textAlign: "right",
  paddingLeft: theme.spacing(1),
  height: "5rem",
  width: "100%",
  fontSize: "3rem",
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.main,
}));

type DisplayProps = {
  currValue: string;
};

const Display: React.FC<DisplayProps> = ({ currValue }: DisplayProps) => {
  return (
    <DisplayContainer
      sx={{ border: 2, borderRadius: 1, borderColor: "#009688" }}
    >
      {currValue}
    </DisplayContainer>
  );
};

export default Display;
