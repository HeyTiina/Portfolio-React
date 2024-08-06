import React from "react";
import "./Projects.css";
import weatherImage from "./projects/weather-site.png";
import dictionaryImage from "./projects/Dictionary.png";
import travelblogImage from "./projects/travel-blog.png";
import aigeneratorImage from "./projects/ai-generator.png";

const Project = ({ image, description, link }) => (
  <div className="project-container">
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
    <div>
      <h1 className="title">My Recent Work</h1>
      <div className="grid">
        <Project
          image={weatherImage}
          description="Weather website using React with a forecast and a change of mesurements included!"
          link="https://vanillareat.netlify.app"
        />
        <Project
          image={travelblogImage}
          description="Playing a lot with CSS, I could improve a lot with this travel website"
          link="https://travel-blog-deals.netlify.app"
        />
        <Project
          image={dictionaryImage}
          description="Dictionary with photos for help. Any word you need to know?"
          link="https://reactdictionarybytiina.netlify.app"
        />
        <Project
          image={aigeneratorImage}
          description="Your AI Tina at your disposicion. Do you have any question?"
          link="https://ai-bytiina.netlify.app"
        />
      </div>
    </div>
  );
}
