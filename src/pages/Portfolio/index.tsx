import { Container } from "../../GlobalStyle";
import CardsProject from "../../components/CardProjects";
import Title from "../../components/Title";
import TitleMobile from "../../components/TitleMobile";
import { ContainerProjects } from "./style";

interface PropsPortfolio {
  title: string;
  textProject: string;
  img: string;
  path: string;
}

const Card = ({ title, img, textProject, path }: PropsPortfolio) => {
  return (
    <CardsProject
      img={img}
      title={title}
      textProject={textProject}
      path={path}
    />
  );
};

const Portfolio = () => {
  const Projects = [
    {
      title: "Saving Pets",
      textProject:
        "This is a project that began during my college with the aim of being presented at the end of the course by the discipline of Project Integrator, but throughout the project we saw that it could become something real and that would help pets truly...",
      img: "/src/assets/img/capaProjects/saving-pets.png",
      path: "project-saving-pets",
    },
    {
      title: "Game Secret Number",
      textProject:
        "This is a project personal that I created for trainning Javascript and API's. Summarizing it is a this is a guessing game using voice recognition...  ",
      img: "/src/assets/img/capaProjects/game-secret-number.png",
      path: "project-game-secret-number",
    },
    {
      title: "Mundo Você Sabia",
      textProject:
        "I built this Blog to understand some subjects, and there's nothing better than learning by teaching, right?! This is a blog about curiosities in the IT area.",
      img: "/src/assets/img/capaProjects/mundo-voce-sabia.png",
      path: "project-mundo-voce-sabia",
    },
  ];

  return (
    <>
      <Container>
        <Title preTitle="my" positle="Projects" textBack="works" />
        <TitleMobile preTitle="Port" posTitle="folio" isSingleWord/>
        <ContainerProjects>
          {Projects.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </ContainerProjects>
      </Container>
    </>
  );
};

export default Portfolio;
