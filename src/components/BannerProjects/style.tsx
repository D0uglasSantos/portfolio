import styled from "styled-components";

interface PropsBanner {
  backgroundColor: string;
}

export const Section = styled.section<PropsBanner>`
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  gap: 2rem;
  height: 30rem;
  justify-content: center;
  text-align: center;
`;

export const TitleBanner = styled.h1`
  color: #fff;
  font-size: 4rem;
  font-weight: 700;
  line-height: 5rem;
`;

export const Summary = styled.h3`
  color: #fff;
  font-size: 1.2rem;
  line-height: 2rem;
  width: 50%;

  @media screen and (max-width: 500px) {
    width: 90%;
  }
`;

export const LiveProject = styled.a`
  align-items: center;
  background-color: #ffb912;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 1.1rem;
  font-weight: bold;
  height: 3.4rem;
  justify-content: center;
  letter-spacing: 0.1rem;
  padding: 0.5rem 1rem;
  transition: all 0.5s ease;
  text-decoration: none;
  text-transform: uppercase;
  width: 14rem;

  &:hover {
    transform: translateY(-10%);
    box-shadow: rgba(255, 185, 18, 0.3) 0px 19px 38px,
      rgba(255, 185, 18, 0.1) 0px 8px 7px;
  }

  @media screen and (max-width: 500px) {
    width: 40%;
    height: 3rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.8rem;
    height: 2.3rem;
  }
`;
