import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Vyshnavi Chidire
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 text-gray-400 hover:text-white">
            Projects
          </a>
          <a href="#skills" className="mr-5 text-gray-400 hover:text-white">
            Skills
          </a>
          <a href="https://drive.google.com/file/d/14payfSfChyEp_XxchYMUujL3eVzlzcFS/view?usp=drive_link" className="mr-5 text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer">
            Resume
          </a>
          <a href="#designprojects" className="mr-5 text-gray-400 hover:text-white">
            Design Works
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 hover:text-white focus:outline-none hover:bg-gray-700 rounded text-base text-gray-400 mt-4 md:mt-0">
          Lets Connect
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}