import React, { useState, useRef, lazy, Suspense } from "react";
import "./App.scss";
import Background from "./Components/Background/Background";
import { Link, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa";
// import Home from "./Views/Home/Home";
// import About from "./Views/About/About";
// import Skills from "./Views/Skills/Skills";
// import Projects from "./Views/Projects/Projects";
import Heading1 from "./Components/Headings/Heading1";
import Heading2 from "./Components/Headings/Heading2";
import Curtain from "./Components/Curtain/Curtain";
import Footer from "./Components/Footer/Footer";
const Home = lazy(() => import("./Views/Home/Home"));
const About = lazy(() => import("./Views/About/About"));
const Skills = lazy(() => import("./Views/Skills/Skills"));
const Projects = lazy(() => import("./Views/Projects/Projects"));

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const handleCloseNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="App">
      <Background />
      <Curtain />
      <div className="main-wrapper">
        <button
          aria-label="navigation menu"
          className="nav-toggle-btn"
          onClick={toggleNav}
        >
          <FaBars />
        </button>
        <div className="left-wrapper">
          <div className="intro-text">
            <div className="name-heading">
              <Heading2 HeadingText="I'm" className="testclass" />
              <Heading1 HeadingText="Ivar Olsson" />
            </div>
            <Heading2 HeadingText="Welcome to my website" />
          </div>
          <nav ref={navRef} className={`nav ${isNavOpen ? "open" : ""}`}>
            <div className="nav-inside">
              <li>
                <Link
                  onClick={handleCloseNav}
                  className="nav-button"
                  to="/About"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleCloseNav}
                  className="nav-button"
                  to="/Projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleCloseNav}
                  className="nav-button"
                  to="/Skills"
                >
                  Skills
                </Link>
              </li>
            </div>
          </nav>
        </div>
        <main className="content-wrapper">
          <Suspense fallback={<h2>Loading...</h2>}>
            <AnimatePresence>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Skills" element={<Skills />} />
                <Route path="/About" element={<About />} />
                <Route path="/Projects" element={<Projects />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>
        <div className="light" />
        <div className="shadow" />
        <div className="marble" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
