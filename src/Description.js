import React from "react";
import imagen from "./images/Valentina.jpg";

export default function Footer() {
  return (
    <section>
      <div className="row">
        <div className="col-6">
          <h1>Hello World</h1>
          <h2>I'm Valentina Bastidas C.</h2>
          <h3>Front-End Developer based in Zürich, Switzerland</h3>
        </div>
        <div className="col-6">
          <img src={imagen} alt="Valentina Bastidas C." />
        </div>
      </div>
    </section>
  );
}
