import Title from "../Title";
import TitleMobile from "../TitleMobile";
import { LiveProject, Section, Summary } from "./style";

interface PropsBanner {
  preTitle: string;
  posTitle: string;
  preTitleMobile: string;
  posTitleMobile: string;
  summary: string;
  backgroundColor: string;
  link: string;
}

const Banner = ({
  preTitle,
  posTitle,
  summary,
  link,
  backgroundColor,
  preTitleMobile,
  posTitleMobile
}: PropsBanner) => {
  return (
    <Section backgroundColor={backgroundColor}>
      <Title preTitle={preTitle} positle={posTitle} textBack="Project" />
      <TitleMobile preTitle={preTitleMobile} posTitle={posTitleMobile} isSingleWord={false} />
      <Summary>{summary}</Summary>
      <LiveProject href={link} target="_blank">
        live project
      </LiveProject>
    </Section>
  );
};

export default Banner;
