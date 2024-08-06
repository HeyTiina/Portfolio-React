import React from "react";
import "./Projects.css";
import Weather from "./projects/weather-site.png";
import Dictionary from "./projects/Dictionary.png";
import Travelblog from "./projects/travel-blog.png";
import Aigenerator from "./projects/ai-generator.png";

export default function Projects() {
  return (
    <section>
      <div>
        <h1 className="title-projects">My Recent Work</h1>
        <div className="global">
          <div className="container">
            <div className="column-1">
              <div className="project-container">
                <img
                  className="Weather img-fluid"
                  src={Weather}
                  alt="Weather website"
                />
                <div className="project-overlay">
                  <p>
                    Weather website using React with a forecast and a change of
                    mesurements included!
                  </p>
                  <a
                    href="https://vanillareat.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check it out
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
                  <p>
                    Playing a lot with CSS, I could improve a lot with this
                    travel website
                  </p>
                  <a
                    href="https://travel-blog-deals.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check it out
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container ">
            <div className="column-1">
              <div className="project-container">
                <img
                  className="Dictionary img-fluid"
                  src={Dictionary}
                  alt="Dictionary"
                />
                <div className="project-overlay">
                  <p>Dictionary with photos for help. Any word you need to know?</p>
                  <a
                    href="https://reactdictionarybytiina.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check it out
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
                  <p>Your AI Tina at your disposicion. Do you have any question?</p>
                  <a
                    href="https://ai-bytiina.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check it out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
