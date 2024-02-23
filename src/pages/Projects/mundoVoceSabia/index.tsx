import { Container } from "../../../GlobalStyle";
import Banner from "../../../components/BannerProjects";
import ProjectView from "../../../components/ProjectViewPage";

const MundoVoceSabia = () => {
  return (
    <>
      <Banner
        preTitle="Mundo Você"
        posTitle="Sabia"
        preTitleMobile="mundo voce"
        posTitleMobile="sabia"
        summary="A website about technology curiosity. Python, javascript, css, front-end among other things, read and discover you already knew all this content!"
        backgroundColor="#041833"
        link="https://mundo-voce-sabia.vercel.app"
      />
      <Container>
        <ProjectView
          src="/images/capaProjects/mundo-voce-sabia.png"
          overview="This is a project I did to study and try to help others too, as it is a blog about curiosities about technology. It was made using react and javascript. Hope you like it!
        Feel free to check out the Project by visiting the Live Link."
          link="https://mundo-voce-sabia.vercel.app"
          name={["React", "Javascript", "CSS3"]}
        />
      </Container>
    </>
  );
};

export default MundoVoceSabia;
