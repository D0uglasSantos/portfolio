import { Card, ContainerCard } from "./style";

interface TechnologiesProps {
  logo: string;
}

const CardTechnologies = ({ logo }: TechnologiesProps) => {
  return (
    <ContainerCard>
      <Card>
        <img src={logo} alt="Logo" />
      </Card>
    </ContainerCard>
  );
};

export default CardTechnologies;
