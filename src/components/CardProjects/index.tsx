import { Link } from "react-router-dom";
import {
  Content,
  DivCard,
  ImgProject,
  ProjectAbout,
  ReadMore,
  TitleProject,
} from "./style";

interface PropsCards {
  title: string;
  textProject: string;
  img: string;
  path: string;
}

const CardsProject = ({ title, textProject, img, path }: PropsCards) => {
  return (
    <DivCard>
      <ImgProject src={img} img={img} />
      <Content>
        <TitleProject>{title}</TitleProject>
        <ProjectAbout>{textProject}</ProjectAbout>
        <Link to={path}>
          <ReadMore>Read More</ReadMore>
        </Link>
      </Content>
    </DivCard>
  );
};

export default CardsProject;
