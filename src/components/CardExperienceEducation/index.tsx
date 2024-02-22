import {
  CardData,
  CardText,
  CardTitle,
  Content,
  DivData,
  DivFlex,
  DivIcon,
  DivInfos,
} from "./style";

interface CardProps {
  data: string;
  title: string;
  posTitle: string;
  text: string;
  icon: React.FunctionComponent;
}

const CardExperienceEduaction = ({
  data,
  title,
  posTitle,
  text,
  icon: Icon,
}: CardProps) => {
  return (
    <DivInfos>
      <Content>
        <DivFlex>
          <DivIcon>
            <Icon />
          </DivIcon>
          <DivData>
            <CardData>{data}</CardData>
          </DivData>
        </DivFlex>
        <CardTitle>
          {title} - {posTitle}
        </CardTitle>
        <CardText>{text}</CardText>
      </Content>
    </DivInfos>
  );
};

export default CardExperienceEduaction;
