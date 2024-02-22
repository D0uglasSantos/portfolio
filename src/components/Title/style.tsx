import styled from "styled-components";

export const TitlePrincipal = styled.section`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;

  @media screen and (max-width: 580px) {
    display: none;
  }
`;

export const SecundaryDiv = styled.div`
  display: flex;
  justify-content: center;
  z-index: 998;
  position: relative;
  margin: 2rem 0;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: 6.5rem;
  color: #222222;
  text-transform: uppercase;
  line-height: 77px;
  letter-spacing: 1.2rem;

    @media screen and (max-width: 700px) {
    font-size: 5rem;
  }
`;

export const PrimaryDiv = styled.div`
  display: flex;
  gap: 0.5rem;
  position: absolute;
  top: 0;
  z-index: 999;
  width: max-content;
  font-weight: 900;
  font-size: 3rem;
  letter-spacing: 0;

    @media screen and (max-width: 700px) {
    font-size: 2rem;
  }
`;

export const PreTitle = styled.h1`
  color: #fff;
`;

export const PosTitle = styled.h1`
  color: #ffb912;
`;
