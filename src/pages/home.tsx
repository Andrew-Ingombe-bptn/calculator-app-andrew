import styled from "styled-components";
import Calculator from "../components/Calculator";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #eee;
`;

const Home = () => {
  return (
    <Container>
      <Calculator />
    </Container>
  );
};

export default Home;
