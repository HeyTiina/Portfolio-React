import React from "react";
import Valentina from "./Valentina.jpg";
import "./Description.css";

export default function Description() {
  return (
    <section>
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
        I graduated last year and am ready to take on new challenges by bringing
        extensive work-under-pressure experience in catering services from
        Mallorca, Spain. I am a hardworking team player looking to join a
        motivated team in an exciting environment, to develop my skills and
        learn new ones.
      </p>
    </section>
  );
}
