import styled, { keyframes } from "styled-components";

interface TitleProps {
  children: string;
}

const blinkCursor = keyframes`
  50% {
    border-right-color: transparent;
  }
`;

const typeAndDelete = keyframes`
  0%, 10% {
    width: 0;
  }
  45%, 55% {
    width: 12rem; /* ajuste a largura com base no conteúdo */
  }
  90%, 100% {
    width: 0;
  }
`;

const Text = styled.div`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.2em solid green; /* Cursor */
  animation: ${typeAndDelete} 5s steps(15) infinite,
    ${blinkCursor} 0.5s step-end infinite alternate;
  /* margin-top: 1.5em; */
  width:max-content;
  font-family: "Source Code", monospace;
  font-size:2rem;
  text-transform: uppercase;
  color: #ffb400;
`;

const TextAnimated = ({ children }: TitleProps) => {
  return <Text>{children}</Text>;
};

export default TextAnimated;
