import styled, { keyframes } from "styled-components";

const BlobBounce = keyframes`
  0% {
    transform: translate(-100%, -100%) translate3d(0, 0, 0);
  }

  25% {
    transform: translate(-100%, -100%) translate3d(100%, 0, 0);
  }

  50% {
    transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
  }

  75% {
    transform: translate(-100%, -100%) translate3d(0, 100%, 0);
  }

  100% {
    transform: translate(-100%, -100%) translate3d(0, 0, 0);
  }
`;

export const ContainerCard = styled.div`
  position: relative;
  width: 11rem;
  height: 10rem;
  border-radius: 14px;
  z-index: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 500px) {
    width: 9.6rem;
    height: 8rem;
  }
`;

export const Card = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  width: 10.2rem;
  height: 9.2rem;
  z-index: 2;
  background: #111111;
  backdrop-filter: blur(24px);
  border-radius: 10px;
  overflow: hidden;
  outline: 1px solid #bebebe;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 800px) {
    width: 9rem;
    height: 7.3rem;
    img {
      width: 4rem;
      height: 4rem;
    }
  }
`;

/*export const Blob = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 125px;
  border-radius: 50%;
  background-color: #ffb400;
  opacity: 1;
  filter: blur(12px);
  animation: ${BlobBounce} 8s infinite ease;
`;*/

export const P = styled.h2`
  color: #fff;
  letter-spacing: 2px;
  font-size: 1.2rem;
  font-weight: 100;
  font-family: "Poppins", sans-serif;
`;
