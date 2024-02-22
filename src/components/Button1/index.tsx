import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa6";

const MoreAbout = styled.button`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: bold;
  text-decoration: none;
  width: max-content;
  transition: all 0.5s;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 1em 1.5em;
  color: #ffedd3;
  text-transform: uppercase;
  position: relative;
  transition: 0.5s ease;

  &:hover {
    background-color: #ffb400;
    transition-delay: 0.5s;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: #ffc506;
    transition: 0.5s ease;
  }

  &:hover::before {
    width: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0;
    width: 100%;
    background-color: #ffc506;
    transition: 0.4s ease;
    z-index: -1;
  }

  &:hover::after {
    height: 100%;
    transition-delay: 0.4s;
    color: aliceblue;
  }
`;

interface Button1Props {
  children: string;
}

const Button1 = ({ children }: Button1Props) => {
  return (
    <MoreAbout>
      {children} <FaArrowRight />
    </MoreAbout>
  );
};

export default Button1;
