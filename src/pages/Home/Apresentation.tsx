import { BsDashLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import Button1 from "../../components/Button1";
import {
  DivTexts,
  Imagem,
  SectionApresentation,
  TextApresentation,
  TitleApresentation,
} from "./style";

const Apresentation = () => {
  return (
    <SectionApresentation>
      <DivTexts>
        <TitleApresentation color="#FFB400">
          <BsDashLg /> I'm Douglas Santos
        </TitleApresentation>
        <TitleApresentation color="#FFff">Developer</TitleApresentation>
        <TextApresentation color="#fff">
          I'm a Brazilian front-end developer focused on creating clean
          <br /> and easy to use experiences, I am passionate about building
          great <br />
          software that improves the lives of people around me. I'm currently
          also delving deeper <br /> into backend so I can meet demands as a
          full-stack developer as soon as possible!
        </TextApresentation>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <Button1 children="More About Me" />
        </Link>
      </DivTexts>
      <Imagem
        src="/images/logoDouglas/logo-ds.svg"
        alt="Imagem Douglas"
      />
    </SectionApresentation>
  );
};

export default Apresentation;
