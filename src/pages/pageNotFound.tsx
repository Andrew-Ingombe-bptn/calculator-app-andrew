import styled from "styled-components";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const Container = styled.div`
  min-height: 100vh;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  background-color: #009688;
  padding: 8px 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
`;

const PageNotFound = () => {
  return (
    <Container>
      <Typography variant="h3">Opos!!!... Page Not Found - </Typography>
      <div>
        <Link to={"/"}>
          <Button>Go to Home</Button>
        </Link>
      </div>
    </Container>
  );
};

export default PageNotFound;
