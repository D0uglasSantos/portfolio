import styled from "styled-components";

export const Container = styled.section`
  align-items: center;
  background-color: rgb(17, 17, 17);
  display: flex;
  flex-direction: column;
  font-family: Poppins, sans-serif;
  height: 100%;
  justify-content: center;
  padding: 2rem 0px;
  width: 100%;
  transition: all 0.7s ease 0s;
  min-height: 100vh;

  @media screen and (max-width: 580px) {
    align-items: center;
    justify-content: center;
    display: flex;
    text-align: left;
  }
`;
