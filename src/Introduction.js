import React from "react";
import Valentina from "./Valentina.jpg";
import "./Introduction.css";

export default function introduction() {
  return (
    <section className="introduction">
      <h2>Hello World!</h2>
      <h1>My name is Valentina Bastidas C.</h1>
      <img
        className="Valentina-profile"
        src={Valentina}
        alt="Valentina Bastidas C."
      />
    </section>
  );
}
