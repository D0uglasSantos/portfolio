import { Blob, Card, ContainerCard, P } from "./style";

interface TechnologiesProps {
  technologies: string;
  logo: string;
}

const CardTechnologies = ({ technologies, logo }: TechnologiesProps) => {
  return (
    <ContainerCard>
      <Card>
        <P>{technologies}</P>
        <img src={logo} />
      </Card>
      <Blob />
    </ContainerCard>
  );
};

export default CardTechnologies;
