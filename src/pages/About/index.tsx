import Divider from "../../components/Divider";
import Title from "../../components/Title";
import PersonalInfos from "./personalInfos";
import Tecnologies from "./technologies";
import ExperienceEducation from "./ExperienceEducation";
import { Container } from "../../GlobalStyle";
import TitleMobile from "../../components/TitleMobile";

const About = () => (
  <>
    <Container>
      <Title preTitle="about" positle="me" textBack="resume" />
      <TitleMobile preTitle="about" posTitle="me" isSingleWord={false} />
      <PersonalInfos />
      <Divider />
      <Tecnologies />
      <Divider />
      <ExperienceEducation />
    </Container>
  </>
);

export default About;
