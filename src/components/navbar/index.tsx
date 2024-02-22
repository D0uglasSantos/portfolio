import React from "react";
import { IoHome } from "react-icons/io5";
import { FaUser, FaBriefcase } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { Items, Nav, TitleItem } from "./style";

interface PropsNavbar {
  icon: React.ElementType;
  title: string;
  path: string;
}

const IconItem = ({ icon: Icon, title, path }: PropsNavbar) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Link to={path} style={{ textDecoration: "none" }}>
      <Items active={isActive}>
        <Icon />
        <TitleItem>{title}</TitleItem>
      </Items>
    </Link>
  );
};

const Navbar = () => {
  const navItems = [
    { path: "/", icon: IoHome, title: "Home" },
    { path: "/about", icon: FaUser, title: "About Me" },
    { path: "/portfolio", icon: FaBriefcase, title: "Portfolio" },
    { path: "/contact", icon: MdEmail, title: "Email" },
  ];

  return (
    <Nav>
      {navItems.map((item, index) => (
        <IconItem key={index} {...item} />
      ))}
    </Nav>
  );
};

export default Navbar;
