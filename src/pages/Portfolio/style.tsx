import styled from "styled-components";

export const ContainerProjects = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 1.5rem 1rem;

  @media screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }
`;
