import { IoIosAdd } from "react-icons/io";
import { GoHorizontalRule } from "react-icons/go";
import { Div1, Div2, Number, Square, Title } from "./style";

interface PropsSquare {
  number: string;
  title: string;
}

const SquareInfo = ({ number, title }: PropsSquare) => {
  return (
    <Square>
      <Div1>
        <Number>{number}</Number>
        <IoIosAdd />
      </Div1>
      <Div2>
        <GoHorizontalRule />
        <Title>{title}</Title>
      </Div2>
    </Square>
  );
};

export default SquareInfo;
