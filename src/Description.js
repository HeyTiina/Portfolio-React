import React from "react";
import Valentina from "./Valentina.jpg";
import "./Description.css";

export default function Description() {
  return (
    <section>
      <div className="header">
        <div className="container">
          <div className="column-1 presentation">
            <h1>Hello World!</h1>
            <h2>I'm Valentina Bastidas C.</h2>
            <h3>Front-End Developer based in Zürich, Switzerland</h3>
          </div>
          <div className="column-2">
            <img
              className="Valentina-profile img-fluid"
              src={Valentina}
              alt="Valentina Bastidas C."
            />
          </div>
        </div>
        <p className="description">
          I want to develop my career in the digital and IT industry, bringing
          experience in efficient time management and working under pressure. I
          aim to grow with great mentors, an exciting team, and challenging
          projects.
        </p>
      </div>
    </section>
  );
}
