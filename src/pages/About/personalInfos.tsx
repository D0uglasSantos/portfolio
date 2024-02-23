import Button2 from "../../components/Button2";
import { FaDownload } from "react-icons/fa";
import {
  ColumnContainer,
  DivItemsInfo,
  FlexContainer,
  Info,
  InnerInfoSection1,
  InnerInfoSection2,
  Label,
  MainPersonalInfos,
} from "./style";
import SquareInfo from "../../components/SquareInfo";
import SectionTitle from "../../components/SectionTitle";

interface InfoProps {
  itemlabel: string;
  info: string;
}

const InfoItem = ({ itemlabel, info }: InfoProps) => (
  <DivItemsInfo>
    <Label>{itemlabel}</Label>
    <Info>{info}</Info>
  </DivItemsInfo>
);

const InfoItems1 = [
  { itemlabel: "First Name:", info: "Douglas" },
  { itemlabel: "Last Name:", info: "Santos" },
  { itemlabel: "Age:", info: "20 Years" },
  { itemlabel: "Nationality:", info: "Brazilian" },
];
const InfoItems2 = [
  { itemlabel: "Address:", info: "Brasília - DF" },
  { itemlabel: "Phone:", info: "+55 (61) 99924-2049" },
  { itemlabel: "Email:", info: "douglasas410@gmail.com" },
  { itemlabel: "Langages:", info: "English, Espanish" },
];

const downloadFile = () => {
  const link = document.createElement('a');
  link.download = 'cvDouglas.pdf';
  link.href = '/cv/cvDouglas2024.pdf';
  link.click();
};


const PersonalInfos = () => {
  return (
    <MainPersonalInfos>
      <InnerInfoSection1>
        <SectionTitle>Personal Infos</SectionTitle>
        <FlexContainer>
          <ColumnContainer>
            {InfoItems1.map((item, index) => (
              <InfoItem key={index} {...item} />
            ))}
          </ColumnContainer>
          <ColumnContainer>
            {InfoItems2.map((item, index) => (
              <InfoItem key={index} {...item} />
            ))}
          </ColumnContainer>
        </FlexContainer>
        <Button2 children="Download CV" icon={<FaDownload />} onClick={downloadFile} />
      </InnerInfoSection1>
      <InnerInfoSection2>
        <SquareInfo number="2" title="years of experience"/>
        <SquareInfo number="13" title="projects"/>
        <SquareInfo number="20" title="certificates"/>
      </InnerInfoSection2>
    </MainPersonalInfos>
  );
};

export default PersonalInfos;
