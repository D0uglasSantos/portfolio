import styled from "styled-components";
import Apresentation from "./Apresentation";

const Main = styled.section`
  align-items: center;
  background-color: #111111;
  display: flex;
  height:100vh;
  justify-content:center;
  width: 100%;
`;

const Home = () => {
  return (
    <Main>
      <Apresentation />
    </Main>
  );
};

export default Home;
