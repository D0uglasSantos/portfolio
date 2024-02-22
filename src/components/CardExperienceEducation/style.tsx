import styled from "styled-components";

export const DivInfos = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  margin-top: 2rem;
`;

export const DivFlex = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
`;

export const DivIcon = styled.div`
  background-color: #ffb400;
  padding: 0.5rem;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  text-align: left;
  padding-left: 1rem;
  border-left: 0.5px solid #c9c9c9;
  width: 31rem;

  @media screen and (max-width: 1100px) {
    width: 27rem;
  }
  @media screen and (max-width: 980px) {
    width: 25rem;
  }
  @media screen and (max-width: 910px) {
    width: 20rem;
  }
  @media screen and (max-width: 470px) {
    width: 18rem;
  }
  @media screen and (max-width: 300px) {
    width: 15rem;
  }
`;

export const DivData = styled.div`
  background-color: #212121;
  width: max-content;
  height: fit-content;
  padding: 0 10px;
  border-radius: 20px;
`;

export const CardData = styled.h4`
  color: #c7c7c7;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  line-height: 28px;
  font-size: 0.8rem;
  text-transform: uppercase;
`;

export const CardTitle = styled.h1`
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  line-height: 28px;
  font-size: 1.2rem;
  display: flex;
`;

export const CardText = styled.p`
  color: #eeeeee;
  font-family: "Poppins", sans-serif;
  line-height: 28px;
  font-size: 0.8rem;
`;
