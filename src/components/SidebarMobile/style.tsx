import { Link } from "react-router-dom";
import styled from "styled-components";

interface NavProps {
  clicked: boolean;
}

export const ContainerMenu = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
  }
`;

export const MenuLabel = styled.label`
  background-color: #222222;
  position: fixed;
  top: 1.2rem;
  right: 1.2rem;
  border-radius: 20px;
  height: 3.5rem;
  width: 3.5rem;
  cursor: pointer;
  z-index: 1010;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 17px 0px;
  text-align: center;
`;

export const NavBackground = styled.div<NavProps>`
  position: fixed;
  top: 1.2rem;
  right: 1.2rem;
  background-image: radial-gradient(#111111, #222222);
  height: 3.2rem;
  width: 3.2rem;
  border-radius: 20px;
  z-index: 1009;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 0.5s;
`;

export const Icon = styled.span<NavProps>`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "#fff")};
  width: 1.4rem;
  height: 2px;
  display: inline-block;
  margin-top: 1.8rem;
  transition: all 0.2s;

  &::before,
  &::after {
    content: "";
    background-color: #fff;
    width: 1.4rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }

  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }

  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
`;

export const Navigation = styled.div<NavProps>`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1009;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};

  transition: width 0.8s, opacity 0.8s;
`;

export const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
  width: 100%;
`;

export const ItemLink = styled(Link)`
  display: inline-block;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  color: #ffb912;
  /* padding: 1rem 2rem; */
  line-height: 3rem;
  padding: 0 1rem;

  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 240%;
  transition: all 0.4s;

  &:hover,
  &:active {
    background-position: 100%;
    color: #000;
    transform: translateX(1rem);
  }
`;
