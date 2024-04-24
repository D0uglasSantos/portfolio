import CardTechnologies from "../../components/CardTechnologies";
import SectionTitle from "../../components/SectionTitle";
import {
  InnerPagesContainer,
  ContainerTechnologies,
  MainPersonalInfos,
} from "./style";

interface TechnologyProps {
  logo: string;
  name: string;
}

const TechnologyCard = ({ logo, name }: TechnologyProps) => (
  <CardTechnologies logo={logo} technologies={name} />
);

const Technologies = () => {
  const technologies = [
    { logo: "/images/technologies/nextJs.svg", name: "NextJs" },
    { logo: "/images/technologies/angular.svg", name: "Angular" },
    { logo: "/images/technologies/react.svg", name: "React" },
    { logo: "/images/technologies/tailwindcss.svg", name: "Tailwindcss" },
    { logo: "/images/technologies/css.svg", name: "CSS3" },
    { logo: "/images/technologies/javascript.svg", name: "Javascript" },
    { logo: "/images/technologies/typescript.svg", name: "TypeScript" },
    { logo: "/images/technologies/node.svg", name: "Node" },
    { logo: "/images/technologies/git.svg", name: "Git" },
    { logo: "/images/technologies/mysql.svg", name: "MySQL" },
    { logo: "/images/technologies/figma.svg", name: "Figma" },
    { logo: "/images/technologies/wordpress.svg", name: "Wordpress" },
    { logo: "/images/technologies/plone.svg", name: "Plone" },
  ];

  return (
    <MainPersonalInfos>
      <InnerPagesContainer>
        <SectionTitle>My Technologies</SectionTitle>
        <ContainerTechnologies>
          {technologies.map((tech, index) => (
            <TechnologyCard key={index} {...tech} />
          ))}
        </ContainerTechnologies>
      </InnerPagesContainer>
    </MainPersonalInfos>
  );
};

export default Technologies;
