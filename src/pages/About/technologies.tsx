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
    { logo: "/images/technologies/angular.svg", name: "Angular" },
    { logo: "/images/technologies/react.svg", name: "React" },
    { logo: "/images/technologies/nextJs.svg", name: "NextJs" },
    { logo: "/images/technologies/node.svg", name: "Node" },
    {
      logo: "/images/technologies/tailwindcss.svg",
      name: "Tailwindcss",
    },
    {
      logo: "/images/technologies/css.svg",
      name: "CSS3",
    },
    { logo: "/images/technologies/javascript.svg", name: "Javascript" },
    { logo: "/images/technologies/typescript.svg", name: "TypeScript" },
    { logo: "/images/technologies/git.svg", name: "Git" },
    { logo: "/images/technologies/figma.svg", name: "Figma" },
    { logo: "/images/technologies/wordpress.svg", name: "Wordpress" },
    { logo: "/images/technologies/plone.svg", name: "Plone" },
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
