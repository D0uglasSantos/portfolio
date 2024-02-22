import styled from "styled-components";

export const MainPersonalInfos = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  width: 90%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const InnerContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const InnerInfoSection1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  @media screen and (max-width: 1150px) {
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 560px) {
    width: 90%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const InnerInfoSection2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  flex-basis: calc(
    50% - 1rem
  ); /* Define a largura máxima para 50% - 1rem de espaço entre os elementos */

  @media screen and (max-width: 480) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-basis: 1;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  gap: 2rem;

  @media screen and (max-width: 1150px) {
    display: flex;
    gap: 1rem;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin: 1rem 0;
  }

  @media screen and (max-width: 300px) {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin: 1rem 0;
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const DivItemsInfo = styled.div`
  display: flex;
  gap: 0.2rem;

  @media screen and (max-width: 560px) {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }
`;

export const Label = styled.p`
  color: #cbcbcb;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;

  @media screen and (max-width: 386px) {
    font-size: 0.8rem;
    width:max-content;
  }
`;

export const Info = styled.p`
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;

  @media screen and (max-width: 386px) {
    font-size: 0.9rem;
  }
`;

// My Technologies - ABOUT

export const InnerPagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const ContainerTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  gap: 1.5rem;
  margin-top: 2rem;

  @media screen and (max-width: 800px) {
    width: 90%;
    gap: 1rem;
  }
  @media screen and (max-width: 480px) {
    justify-content: center;
    gap: 2rem;
    width: 100%;
  }
`;

// My Experiences and Educations

export const DivExepriencesEducations = styled.div`
  display: flex;
  gap: 5rem;
  justify-content: space-around;
  align-items: flex-start;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 0.7rem;
  }
`;
