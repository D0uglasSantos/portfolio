import CardTechnologies from "../../components/CardTechnologies";
import SectionTitle from "../../components/SectionTitle";
import Slider from "react-infinite-logo-slider";
import {
  InnerPagesContainer,
  ContainerTechnologies,
  MainPersonalInfos,
} from "./style";

interface TechnologyProps {
  logo: string;
}

const TechnologyCard = ({ logo }: TechnologyProps) => (
  <CardTechnologies logo={logo} />
);

const Technologies = () => {
  const technologies = [
    { logo: "/images/technologies/nextJs.svg" },
    { logo: "/images/technologies/angular.svg" },
    { logo: "/images/technologies/react.svg" },
    { logo: "/images/technologies/tailwindcss.svg" },
    { logo: "/images/technologies/css.svg" },
    { logo: "/images/technologies/javascript.svg" },
    { logo: "/images/technologies/typescript.svg" },
    { logo: "/images/technologies/node.svg" },
    { logo: "/images/technologies/git.svg" },
    { logo: "/images/technologies/mysql.svg" },
    { logo: "/images/technologies/figma.svg" },
    { logo: "/images/technologies/wordpress.svg" },
    { logo: "/images/technologies/plone.svg" },
  ];

  return (
    <MainPersonalInfos>
      <InnerPagesContainer>
        <SectionTitle>My Technologies</SectionTitle>
        <ContainerTechnologies>
          <Slider
            duration={30}
          >
            {technologies.map((tech, index) => (
              <Slider.Slide>
                <TechnologyCard key={index} {...tech} />
              </Slider.Slide>
            ))}
          </Slider>
        </ContainerTechnologies>
      </InnerPagesContainer>
    </MainPersonalInfos>
  );
};

export default Technologies;
