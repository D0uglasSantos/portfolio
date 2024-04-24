import { Link } from "react-router-dom";
import { Container } from "../../GlobalStyle";
import {
  ButonBack,
  ButtonLive,
  DivButtons,
  DivTools,
  Img,
  ProjectOverview,
  SeeLive,
  Text,
  Title,
  ToolsUsed,
} from "./style";
import CardsTools from "../CardTools";

interface PropsOverview {
  src: string;
  overview: string;
  link: string;
  name: string[];
}

const ProjectView = ({ src, overview, link, name }: PropsOverview) => {
  return (
    <Container>
      <Img src={src} />
      <ProjectOverview>
        <Title>Project Overview</Title>
        <Text>{overview}</Text>
      </ProjectOverview>
      <ToolsUsed>
        <Title>Tools Used</Title>
        <DivTools>
          <CardsTools names={name} />
        </DivTools>
      </ToolsUsed>
      <SeeLive>
        <Title>See Live</Title>
        <DivButtons>
          <ButtonLive href={link} target="_blank">
            Live Link
          </ButtonLive>
          <Link to="/portfolio">
            <ButonBack>Go Back</ButonBack>
          </Link>
        </DivButtons>
      </SeeLive>
    </Container>
  );
};

export default ProjectView;
