import styled from "styled-components";

interface ItemsProps {
  active: boolean;
}

export const Nav = styled.header`
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  gap: 1rem;
  height: 100vh;
  justify-content: center;
  margin-left: 1rem;
  width: 15%;
  position: fixed;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const Items = styled.div<ItemsProps>`
  position: relative;
  padding: 1rem;
  border-radius: 999px;
  background-color: ${(props) =>
    props.active? "#ffb400" : "#515151"};
  width: 20px;
  height: 20px;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: white;
  transition: all 0.5s linear;
  transform: translateX(-10px);

  &:hover {
    background-color: #ffb400;
    width: max-content;
    transform: translateX(0px);
  }

  &:hover > p {
    display: block;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 1rem;
    z-index: -1;
    transition: all 600ms ease;
  }

  &:hover::before {
    width: 100%;
  }
`;

export const TitleItem = styled.p`
  display: none;
  font-size: 15px;
  text-transform: uppercase;
  color: white;
`;
