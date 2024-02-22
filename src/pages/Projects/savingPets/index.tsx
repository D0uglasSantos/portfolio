import { Container } from "../../../GlobalStyle";
import Banner from "../../../components/BannerProjects";
import ProjectView from "../../../components/ProjectViewPage";

const SavingPets = () => {
  return (
    <>
      <Banner
        preTitle="Saving"
        posTitle="pets"
        preTitleMobile="saving"
        posTitleMobile="pets"
        summary="This blog was a college project that was created with the goal of becoming an organization that helps pets in various situations."
        backgroundColor="#9D8B81"
        link="https://saving-pets.vercel.app"
      />
      <Container>
        <ProjectView
          src="/src/assets/img/capaProjects/saving-pets.png"
          overview="The project is actually a college paper that will be presented at the end of the course. The main idea is to create a blog and future a mobile application that would help in general with pets.

        The blog would inform data about the organization and the application would be where it could make reports of abandonment and abuse among other features.
        Feel free to check out the Project by visiting the Live Link."
          name={["NextJs", "React", "Typescript", "Tailwindcss"]}
          link="https://saving-pets.vercel.app"
        />
      </Container>
    </>
  );
};

export default SavingPets;
