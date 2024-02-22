import { Title } from "./style";

interface PropsTitle {
  children: string;
}

const SectionTitle = ({ children }: PropsTitle) => {
  return <Title>{children}</Title>;
};

export default SectionTitle;
