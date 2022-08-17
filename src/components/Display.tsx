import { styled } from "@mui/material";

const DisplayContainer = styled("div")(({ theme }) => ({
  textAlign: "right",
  padding: theme.spacing(3),
  height: "5rem",
  width: "100%",
  fontSize: "3rem",
  color: theme.palette.primary.main,
}));

const Display = () => {
  return <DisplayContainer>0</DisplayContainer>;
};

export default Display;
