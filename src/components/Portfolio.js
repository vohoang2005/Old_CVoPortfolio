//Reference the Project.js to pull each JS file.

import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Run Buddy!",
    languages: "HTML, CSS",
    image: "/img/Newrunbuddy.png",
    description: "A Website whom you can select your own personal trainer to help you get into shape!",
    repo: "https://github.com/vohoang2005/run-buddy",
    live: "https://vohoang2005.github.io/run-buddy/",
  },
  {
    id: 1,
    title: "Horiseon",
    languages: "HTML, CSS",
    image: "/img/Horiseon.png",
    description: "A Search Engine to help user find the right customer for their businesses",
    repo: "https://github.com/vohoang2005/horiseon",
    live: "https://vohoang2005.github.io/horiseon/",
  },
  {
    id: 2,
    title: "Random Dating App",
    languages: "HTML, CSS, Javascript",
    image: "/img/randm.png",
    description: "A dating App that match you with a Random User!",
    repo: "https://github.com/vohoang2005/randm",
    live: "https://ran-dm.herokuapp.com/login",
  },
  {
    id: 3,
    title: "Password Generator",
    languages: "HTML, CSS, Javascript",
    image: "/img/PasswordGenerator.png",
    description: "A simple Password Generator that is very easy to use and secure!",
    repo: "https://github.com/vohoang2005/Password-Generator",
    live: "https://vohoang2005.github.io/Password-Generator/",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    languages: "HTML, Bootstrap, Javascript",
    image: "/img/weather-app.png",
    description: "A Weather App for you to search for a City to see if it sunny or rain.",
    repo: "https://github.com/vohoang2005/weather-dashboard",
    live: "https://vohoang2005.github.io/weather-dashboard/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Projects!</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
