import styled from "styled-components";

export const Square = styled.div`
  border: 0.5px solid #777777;
  border-radius: 0.3rem;
  padding: 2rem;
  width: 13rem;
  height: 7rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  @media screen and (max-width: 800px) {
    width: 9rem;
    height: 4rem;
  }

  @media screen and (max-width: 500px) {
    width: 6.3rem;
    height: 2rem;
  }
`;

export const Div1 = styled.div`
  display: flex;
  color: #ffb400;
  font-size: 2rem;
`;

export const Div2 = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #dad9d9;
  /* font-size:3rem; */
`;

export const Number = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 3.2rem;
  font-weight: 700;

  @media screen and (max-width:500px){
    font-size: 2rem;
  }
`;

export const Title = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.1rem;

  @media screen and (max-width:500px){
    font-size: 0.7rem;
  }
`;
