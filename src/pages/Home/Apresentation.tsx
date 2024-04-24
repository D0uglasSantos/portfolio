import { BsDashLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import Button1 from "../../components/Button1";
import { Typewriter } from "react-simple-typewriter";
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
        <TextApresentation>
          <Typewriter
            words={[
              "Front-end Developer",
              "Build dreams in codes",
              "UI-UX",
              "Coding...",
            ]}
            typeSpeed={80}
            cursor={true}
            loop={false}
            cursorBlinking
          />
        </TextApresentation>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <Button1 children="More About Me" />
        </Link>
      </DivTexts>
      <Imagem src="/images/logoDouglas/logo-ds.svg" alt="Imagem Douglas" />
    </SectionApresentation>
  );
};

export default Apresentation;
