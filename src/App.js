import React from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import DesignProjects from "./Components/DesignProjects";

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <DesignProjects/>
      <Contact />
    </main>
  );
}