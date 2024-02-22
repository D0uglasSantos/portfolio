import CardTecnologies from "../../components/CardTecnologies";
import SectionTitle from "../../components/SectionTitle";
import {
  InnerPagesContainer,
  ContainerTechnologies,
  MainPersonalInfos,
} from "./style";

interface PropsTeachnologies {
  logo: string;
  name: string;
}

const Cards = ({ logo, name }: PropsTeachnologies) => {
  return <CardTecnologies logo={logo} technologies={name} />;
};

const Tecnologies = () => {
  const technologies = [
    { logo: "/src/assets/img/technologies/angular.svg", name: "Angular" },
    { logo: "/src/assets/img/technologies/react.svg", name: "React" },
    { logo: "/src/assets/img/technologies/nextJs.svg", name: "NextJs" },
    { logo: "/src/assets/img/technologies/node.svg", name: "Node" },
    {
      logo: "/src/assets/img/technologies/tailwindcss.svg",
      name: "Tailwindcss",
    },
    {
      logo: "/src/assets/img/technologies/css.svg",
      name: "CSS3",
    },
    { logo: "/src/assets/img/technologies/javascript.svg", name: "Javascript" },
    { logo: "/src/assets/img/technologies/typescript.svg", name: "TypeScript" },
    { logo: "/src/assets/img/technologies/git.svg", name: "Git" },
    { logo: "/src/assets/img/technologies/figma.svg", name: "Figma" },
    { logo: "/src/assets/img/technologies/wordpress.svg", name: "Wordpress" },
    { logo: "/src/assets/img/technologies/plone.svg", name: "Plone" },
  ];

  return (
    <MainPersonalInfos>
      <InnerPagesContainer>
        <SectionTitle>My Tecnologies</SectionTitle>
        <ContainerTechnologies>
          {technologies.map((item, index) => (
            <Cards key={index} {...item} />
          ))}
        </ContainerTechnologies>
      </InnerPagesContainer>
    </MainPersonalInfos>
  );
};

export default Tecnologies;
