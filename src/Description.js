import React from "react";
import Valentina from "./Valentina.jpg";
import "./Description.css";

export default function Description() {
  return (
    <section className="description">
      <div className="description-container">
        <div className="column-1 presentation">
          <h1 className="m-3">I'm Valentina Bastidas C.</h1>
          <h2>Front-End Developer based in Zürich, Switzerland</h2>
          <p className="m-4">
            I’m diving into new skills every day, eager to grow in the IT field
            and shape my own future.{" "}
            <strong>Ready to start new projects.</strong>
          </p>
        </div>
        <div className="column-2">
          <img
            className="Valentina-profile img-fluid"
            src={Valentina}
            alt="Valentina Bastidas C."
          />
        </div>
      </div>
    </section>
  );
}
