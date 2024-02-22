import { useState } from "react";
import {
  ContainerMenu,
  Icon,
  ItemLink,
  List,
  MenuLabel,
  NavBackground,
  Navigation,
} from "./style";

const NavbarMobile = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <ContainerMenu>
      <MenuLabel htmlFor="navi-toogle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>

      <Navigation clicked={click}>
        <List>
          <li>
            <ItemLink onClick={handleClick} to="/">
              Home
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/about">
              About
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/portfolio">
              Portfolio
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/contact">
              Contact
            </ItemLink>
          </li>
        </List>
      </Navigation>
    </ContainerMenu>
  );
};

export default NavbarMobile;
