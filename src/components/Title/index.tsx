import {
  PosTitle,
  PreTitle,
  PrimaryDiv,
  SecundaryDiv,
  TitlePrincipal,
} from "./style";

interface TitleProps {
  preTitle: string;
  positle: string;
  textBack: string;
}

const Title = ({ preTitle, positle, textBack }: TitleProps) => {
  return (
    <TitlePrincipal>
      <SecundaryDiv>
        {textBack}
        <PrimaryDiv>
          <PreTitle>{preTitle}</PreTitle>
          <PosTitle>{positle}</PosTitle>
        </PrimaryDiv>
      </SecundaryDiv>
    </TitlePrincipal>
  );
};

export default Title;
