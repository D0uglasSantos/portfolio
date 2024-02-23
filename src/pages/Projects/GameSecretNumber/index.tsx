import { Container } from "../../../GlobalStyle";
import Banner from "../../../components/BannerProjects";
import ProjectView from "../../../components/ProjectViewPage";

const GameSecretNumber
 = () => {
  return (
    <>
      <Banner
        preTitle="Game Secret"
        posTitle="Number"
        preTitleMobile="game"
        posTitleMobile="number"
        summary="A voice recognition guessing game to challenge everyone!"
        backgroundColor="#0A4D68"
        link="https://game-secret-number-seven.vercel.app/"
      />
      <Container>
        <ProjectView
          src="/images/capaProjects/game-secret-number.png"
          overview="This is a project I did to study and have fun at the same time. After finishing it, I challenged a lot of people. Hope you like!
          Feel free to check out the Project by visiting the Live Link."
          link="https://game-secret-number-seven.vercel.app/"
          name={["HTML","CSS3", "Javascript",]}
        />
      </Container>
    </>
  );
};

export default GameSecretNumber
;
