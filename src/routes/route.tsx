import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Home from "../pages/Home/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Navbar from "../components/navbar";
import MundoVoceSabia from "../pages/Projects/mundoVoceSabia";
import SavingPets from "../pages/Projects/savingPets";
import GameSecretNumber from "../pages/Projects/GameSecretNumber";
import NavbarMobile from "../components/SidebarMobile";

export function AppRoute() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <NavbarMobile />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/project-saving-pets" element={<SavingPets />} />
        <Route
          path="/portfolio/project-mundo-voce-sabia"
          element={<MundoVoceSabia />}
        />
        <Route
          path="/portfolio/project-game-secret-number"
          element={<GameSecretNumber />}
        />
      </Routes>
    </BrowserRouter>
  );
}
