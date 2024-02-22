import styled from "styled-components";

interface ImgProjectProps{
  img: string
}

export const DivCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  border: none;
  width: 100%;

  @media screen and (max-width: 1198px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 0 7rem 0 ;
  }
`;

export const ImgProject = styled.img<ImgProjectProps>`
  src: url(${(props) => props.img});
  width: 43.125rem;
  display: block;
  object-fit: cover;

  @media screen and (max-width: 1300px) {
    width: 30rem;
  }

  @media screen and (max-width: 1198px) {
    width: 40rem;
  }

  @media screen and (max-width: 700px) {
    width: 35rem;
  }

  @media screen and (max-width: 555px) {
    width: 30rem;
  }

  @media screen and (max-width: 480px) {
    width: 25rem;
  }

  @media screen and (max-width: 400px) {
    width: 20rem;
  }

  @media screen and (max-width: 320px) {
    width: 18rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: flex-start;
  width: 28.75rem;

  @media screen and (max-width: 1198px) {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  @media screen and (max-width: 555px) {
    width: 25rem;
  }

  @media screen and (max-width: 415px) {
    width: 20rem;
  }

  @media screen and (max-width: 320px) {
    width: 17rem;
  }
`;

export const TitleProject = styled.h1`
  color: #ffb912;
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ProjectAbout = styled.p`
  color: #fff;
  font-size: 1rem;
  text-align: left;
  line-height: 1.7rem;

  @media screen and (max-width: 1198px) {
    display: flex;
    text-align: center;
    justify-content: center;
  }

  @media screen and (max-width: 320px) {
    font-size: .9rem;
  }

  @media screen and (max-width: 290px) {
    font-size: .7rem;
  }
`;

export const ReadMore = styled.button`
  background-color: #ffb912;
  border: none;
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
  }
`;
