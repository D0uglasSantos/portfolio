import styled from "styled-components";

export const Img = styled.img`
  src: ${(props) => props.src};
  width: 70%;
  display: block;
  object-fit: cover;
`;

export const ProjectOverview = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: "Poppins", sans-serif;
  gap: 2rem;
  width: 80%;
  margin: 2rem 0;

  @media screen and (max-width: 580) {
    width: 10%;
    text-align: center;
  }
`;

export const Title = styled.h2`
  color: #ffb400;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.2rem;
  text-align: center;

  @media screen and (max-width: 580) {
    text-align: left;
  }
`;
export const Text = styled.p`
  color: #fff;
  font-size: 1rem;
  line-height: 2.2rem;
  width: 65%;

  @media screen and (max-width: 500px) {
    width: 100%;
    text-align: center;
  }
`;

export const DivTools = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 780px) {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
`;

export const ToolsUsed = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;

  @media screen and (max-width: 780) {
    align-items: center;
    display: center;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
  }
`;

export const SeeLive = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: flex-start;
  margin: 2rem 0;

  @media screen and (max-width: 780px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media screen and (max-width: 780px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export const ButtonLive = styled.a`
  align-items: center;
  background-color: #ffb912;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  height: 3.1rem;
  justify-content: center;
  letter-spacing: 0.1rem;
  transition: all 0.5s ease;
  text-decoration: none;
  width: 12rem;

  &:hover {
    transform: translateY(-10%);
    box-shadow: rgba(255, 185, 18, 0.3) 0px 19px 38px,
      rgba(255, 185, 18, 0.1) 0px 8px 7px;
  }
`;

export const ButonBack = styled.button`
  background-color: transparent;
  border: 1px solid #ffb912;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  height: 3.1rem;
  letter-spacing: 0.1rem;
  padding: 0.5rem 1rem;
  transition: all 0.5s ease;
  width: 12rem;

  &:hover {
    transform: translateY(-10%);
    box-shadow: rgba(255, 185, 18, 0.3) 0px 19px 38px,
      rgba(255, 185, 18, 0.1) 0px 8px 7px;
    color: #ffb912;
  }
`;
