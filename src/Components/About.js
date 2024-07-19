import React from 'react'
import Profile from "../Assets/Profile.png"

function About() {
  return (
    <section id="about">
    <div className="container mx-auto my-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
          Hi, I'm Vyshnavi Chidire.
          <br className="hidden lg:inline-block" /><span className="text-2xl text-gray-400">Software Developer | Frontend Developer | UI/UX Designer</span>
        </h1>
        <p className="mb-8 leading-relaxed">
        I am a software developer, adept at creating robust web and mobile applications. Passionate about integrating elegant UI/UX design principles to enhance user experiences. Committed to delivering high-quality solutions that exceed client expectations
        </p>
        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
            Work With Me
          </a>
          <a
            href="#projects"
            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
            See My Past Work
          </a>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded-full w-80 h-80"
          alt="hero"
          src={Profile}
        />
      </div>
    </div>
  </section>
  );
}

export default About