import styled from "styled-components";

export const Container = styled.section`
  align-items: center;
  background-color: #111111;
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  height: 100%;
  justify-content: center;
  padding: 2rem 0;
  width: 100%;
  transition: all ease 0.7s;
  min-height: 100vh;

  @media screen and (max-width: 580) {
    align-items: left;
    justify-content: flex-start;
    display: flex;''
    text-align: left;
  }
`;
