import { Card, Tools } from "./style";

interface PropsTools {
  names: string[];
}

const CardsTools = ({ names }: PropsTools) => {
  return (
    <>
      {names.map((name, index) => (
        <Card key={index}>
          <Tools>{name}</Tools>
        </Card>
      ))}
    </>
  );
};

export default CardsTools;
