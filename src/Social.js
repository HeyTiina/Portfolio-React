import React from "react";
import "./Social.css";

import Linkedin from "./IconsSocial/linkedin.png";
import Instagram from "./IconsSocial/instagram.png";
import GitHub from "./IconsSocial/github.png";

export default function Social() {
  return (
    <section className="social">
      <h1>Let's get in touch!</h1>
      <h3>
        {" "}
        I'm always looking for new opportunities. Feel free to contact me!
      </h3>
      <div className="grid-container">
        <a
          href="https://www.linkedin.com/in/valentina-bastidas-castillo-654652266/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-icons" src={Linkedin} alt="Linkedin" />
        </a>

        <a
          href="https://www.instagram.com/hey.tiina/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-icons" src={Instagram} alt="Instagram" />
        </a>

        <a
          href="https://github.com/HeyTiina"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-icons" src={GitHub} alt="Github" />
        </a>
      </div>
    </section>
  );
}
