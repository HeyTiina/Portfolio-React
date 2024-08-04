import React from "react";
import "./Projects.css";
import Weather from "./weather-site.png";
import Dictionary from "./Dictionary.png";
import Travelblog from "./travel-blog.png";
import Aigenerator from "./ai-generator.png";

export default function Projects() {
  return (
    <section>
      <div>
        <h1>My Recent Work</h1>
        <div className="container">
          <div className="column-1">
            <div className="project-container">
              <img
                className="Weather img-fluid"
                src={Weather}
                alt="Weather website"
              />
              <div className="project-overlay">
                <p>Mira mi proyecto</p>
                <a
                  href="https://vanillareat.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver proyecto
                </a>
              </div>
            </div>
          </div>
          <div className="column-2">
            <div className="project-container">
              <img
                className="Travel-blog img-fluid"
                src={Travelblog}
                alt="Travel blog - TravelUS"
              />
              <div className="project-overlay">
                <p>Mira mi proyecto</p>
                <a
                  href="https://travel-blog-deals.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver proyecto
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="column-1">
            <div className="project-container">
              <img
                className="Dictionary img-fluid"
                src={Dictionary}
                alt="Dictionary"
              />
              <div className="project-overlay">
                <p>Mira mi proyecto</p>
                <a
                  href="https://reactdictionarybytiina.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver proyecto
                </a>
              </div>
            </div>
          </div>
          <div className="column-2">
            <div className="project-container">
              <img
                className="Ai-generator img-fluid"
                src={Aigenerator}
                alt="Ai generator"
              />
              <div className="project-overlay">
                <p>Mira mi proyecto</p>
                <a
                  href="https://ai-bytiina.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver proyecto
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </section>
  );
}
