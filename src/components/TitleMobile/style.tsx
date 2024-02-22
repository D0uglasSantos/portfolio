import styled from "styled-components";

interface ContainerTitleProps {
  isSingleWord: boolean;
}

export const ContainerTitle = styled.div<ContainerTitleProps>`
  background-color: #000;
  display: none;
  text-align: center;
  width: 80%;
  margin: 2rem 0 2rem 0;
  padding: 1.5rem 1rem;
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;

  @media screen and (max-width: 580px) {
    display: flex;
    align-items: center;
    gap: ${(props) => (props.isSingleWord ? "" : "0.4rem")};
  }

  @media screen and (max-width: 341px){
    font-size: 1.2rem;
  }
`;

export const PreSmallTitle = styled.h1`
  color: #fff;
`;

export const PosSmallTitle = styled.h1`
  color: #ffb912;
`;
