import styled from "styled-components";

export const InnerContainer = styled.section`
  display: flex;
  gap: 1rem;
  padding: 2rem 0;
  justify-content: space-around;
  width: 70%;

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
  }
  @media screen and (max-width: 520px) {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
  }
`;

export const Div1 = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.5rem;
  width: 35%;
  text-align: left;

  @media screen and (max-width: 950px) {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 70%;
    text-align: left;
  }
`;

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 60%;

  @media screen and (max-width: 700px) {
    width: 90%;
  }

  @media screen and (max-width: 520px) {
    width: 100%;
  }
`;

export const TextContact = styled.p`
  color: #fff;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 1rem 0 1rem 0;
`;

export const DivIConContact = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  margin: 0.7rem 0 0.7rem 0;
`;

export const Icon = styled.div`
  font-size: 2.5rem;
  color: #ffb400;
  display: flex;
  align-items: center;
`;

export const TextIcon = styled.p`
  font-size: 1rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const TitleIcon = styled.h3`
  color: #9e9e9e;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 400;
`;

export const SubtitleIcon = styled.h2`
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
`;

export const DivInputs = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  @media screen and (max-width: 520px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const Inputs = styled.input`
  background-color: #252525;
  padding: 1rem 1.5rem;
  border-radius: 20px;
  border: none;
  width: 45%;
  outline: none;
  color: #fff;
  font-size: 1rem;

  &::placeholder {
    color: #fff;
    font-size: 1rem;

    transition: all 1.5s;
  }

  @media screen and (max-width: 520px) {
    width: 85%;
  }
`;

export const TextArea = styled.textarea`
  background-color: #252525;
  color: #fff;
  font-size: 1rem;
  outline: none;
  border-radius: 20px;
  border: none;
  padding: 1rem 1.5rem;

  &::placeholder {
    color: #fff;
    font-size: 1.1rem;
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  margin-top: 3rem;

  @media screen and (max-width: 950px) {
    margin-top: 0.8rem;
    margin-bottom: 2rem;
  }
`;

export const IconSocial = styled.div`
  align-items: center;
  background-color: #252525;
  border-radius: 999px;
  color: #fff;
  display: flex;
  font-size: 1.4rem;
  height: 40px;
  justify-content: center;
  transition: all 1s;
  width: 40px;

  &:hover {
    background-color: #ffb912;
  }
`;
