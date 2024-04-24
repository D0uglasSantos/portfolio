import CardExperienceEducation from "../../components/CardExperienceEducation";
import {
  DivExperiencesEducations,
  InnerPagesContainer,
  MainPersonalInfos,
} from "./style";
import { FaWordpress } from "react-icons/fa";
import { IoCodeSlash, IoSchool } from "react-icons/io5";
import SectionTitle from "../../components/SectionTitle";

interface CardProps {
  data: string;
  title: string;
  posTitle: string;
  text: string;
  icon: React.FunctionComponent;
}

const Card = ({ icon: Icon, data, title, posTitle, text }: CardProps) => (
  <CardExperienceEducation
    icon={Icon}
    data={data}
    title={title}
    posTitle={posTitle}
    text={text}
  />
);

const experiences = [
  {
    data: "2018 - 2021",
    icon: FaWordpress,
    title: "Wordpress Site Developer",
    posTitle: "Freelancer",
    text: "Developing and maintaining Wordpress websites.",
  },
  {
    data: "2022 - 2023",
    icon: IoCodeSlash,
    title: "Front-end Developer Júnior",
    posTitle: "Incript",
    text: "Developing the front-end of websites and applications. However, it carried out a good part of the UI-UX area at the beginning of the company’s projects.",
  },
  {
    data: "2023 - present",
    icon: IoCodeSlash,
    title: "Developer and Analyst",
    posTitle: "Ministério do Meio Ambiente",
    text: "Developing, analyzing the sites .Gov in which MMA is responsible. And also Develop responsive web pages in PLONE with data collected from the databases of each state.",
  },
];

const education = [
  {
    data: "2022 - present",
    icon: IoSchool,
    title: "Technologist Systems Analysis and Development",
    posTitle: "UniCeub",
    text: "I'm finalizing my graduation in ADS and after I intend to already join the graduate in some other branch of the IT area.",
  },
];

const ExperienceEducation = () => (
  <MainPersonalInfos>
    <InnerPagesContainer>
      <SectionTitle>EXPERIENCE & EDUCATION</SectionTitle>
      <DivExperiencesEducations>
        <div>
          {experiences.map((exp, index) => (
            <Card key={index} {...exp} />
          ))}
        </div>
        {education.map((edu, index) => (
          <Card key={index} {...edu} />
        ))}
      </DivExperiencesEducations>
    </InnerPagesContainer>
  </MainPersonalInfos>
);

export default ExperienceEducation;
