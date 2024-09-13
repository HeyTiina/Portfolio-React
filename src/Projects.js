import React from "react";
import "./Projects.css";
import weatherImage from "./projects/weather-site.png";
import dictionaryImage from "./projects/Dictionary.png";
import travelblogImage from "./projects/travel-blog.png";
import aigeneratorImage from "./projects/ai-generator.png";

const Project = ({ image, description, link }) => (
  <div className="project">
    <img src={image} alt={description} />
    <div className="project-overlay">
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Check it out
      </a>
    </div>
  </div>
);

export default function Projects() {
  return (
    <section className="Projects">
      <h1 className="title">My Recent Work</h1>
      <div className="projects-container">
        <Project
          image={weatherImage}
          description="A weather website built with React, featuring a detailed forecast and the ability to switch between different units of measurement."
          link="https://vanillareact.netlify.app"
        />
        <Project
          image={travelblogImage}
          description="A travel blog that showcases advanced CSS techniques, enhancing the visual appeal and user experience."
          link="https://travelw-tiina.netlify.app"
        />
        <Project
          image={dictionaryImage}
          description="An intuitive dictionary app with image support, making it easy to find and understand any word you need."
          link="https://reactdictionarybytiina.netlify.app"
        />
        <Project
          image={aigeneratorImage}
          description="Meet your AI assistant, Tina, ready to answer any questions you have. Explore the possibilities with this AI generator."
          link="https://ai-byttina.netlify.app"
        />
      </div>
    </section>
  );
}
