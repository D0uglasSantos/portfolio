import styled, { keyframes } from "styled-components";

export const Bounce = keyframes`
  0% {
    transform: translateY(0%);
  }

  50% {
    transform: translateY(5%);
  }

  100% {
    transform: translateY(0%);
  }

`;

export const SectionApresentation = styled.section`
  align-items: center;
  display: flex;
  font-family: "Poppins", sans-serif;
  height: 100vh;
  gap: 2rem;
  justify-content: center;
  width: 100%;
  padding: 0 1rem;
  background: linear-gradient(
    to bottom left,
    #111111 0%,
    #111111 80%,
    #ffb400 80%,
    #ffb400 100%
  );

  @media screen and (max-width: 780px) {
    flex-direction: column; /* Stack items vertically on smaller screens */
  }
`;

export const DivTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 90%; /* Adjust width for smaller screens */
  }
`;

export const TitleApresentation = styled.h1`
  color: ${(props) => props.color};
  padding-bottom: 0.025rem;
  text-align: center;
  font-weight: 700;
  font-size: 51px;
  text-transform: uppercase;

  @media screen and (max-width: 800px) {
    font-size: 2rem; /* Adjust width for smaller screens */
  }
`;

export const TextApresentation = styled.p`
  color: ${(props) => props.color};
  font-size: 1.1rem;
  font-weight: 400px;
  flex-wrap: wrap;
  text-align: center;
  line-height: 1.8rem;
  padding: 1.5rem 0;
`;

export const Imagem = styled.img`
  width: 25%;
  animation: ${Bounce} 3s infinite;   

  @media screen and (max-width: 850px) {
    display:none /* Adjust width for smaller screens */
  }
`;
