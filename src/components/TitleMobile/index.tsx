import { ContainerTitle, PosSmallTitle, PreSmallTitle } from "./style";

interface PropsTitleMobile {
  preTitle: string;
  posTitle: string;
  isSingleWord: boolean;
}

const TitleMobile = ({ preTitle, posTitle, isSingleWord }: PropsTitleMobile) => {
  return (
    <ContainerTitle isSingleWord={isSingleWord}>
      <PreSmallTitle>{preTitle}</PreSmallTitle>
      <PosSmallTitle>{posTitle}</PosSmallTitle>
    </ContainerTitle>
  );
};

export default TitleMobile;
