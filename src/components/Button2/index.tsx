import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border: 2px solid #ffb912;
  border-radius: 5rem;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  gap: 1rem;
  justify-content: space-between;
  overflow: hidden;
  padding: 1rem 2rem;
  position: relative;
  text-transform: uppercase;
  transition: all 0.5s;
  z-index: 1;
  width: max-content;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0%;
    height: 100%;
    background-color: #ffb400;
    border-radius: 5rem;
    border: none;
    z-index: -2;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0%;
    height: 100%;
    background-color: #ffb912;
    transition: all 0.5s;
    border-radius: 5rem;
    border: none;
    z-index: -1;
  }
  &:hover {
    color: #fff;
    &::before {
      width: 100%;
    }
  }
`;

interface Button2Props {
  children: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const Button2 = ({ children, icon, onClick }: Button2Props) => {
  return (
    <Button onClick={onClick}>
      {children} {icon}
    </Button>
  );
};

export default Button2;
