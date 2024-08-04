import React from "react";
import "./Social.css";

import Linkedin from "./social/linkedin.png";
import Mail from "./social/mail.png";
import Instagram from "./social/instagram.png";
import GitHub from "./social/github.png";

export default function Social() {
  return (
    <section className="social">
      <h1>Let's get in touch!</h1>
      <h3>
        {" "}
        I'm always looking for new opportunities and collaborations. Feel free
        to contact me!
      </h3>
      <div className="grid-container">
        <img className="social-icons" src={Linkedin} alt="Linkedin" />{" "}
        <img className="social-icons" src={Mail} alt="Mail" />{" "}
        <img className="social-icons" src={Instagram} alt="Instagram" />{" "}
        <img className="social-icons" src={GitHub} alt="Github" />{" "}
      </div>
    </section>
  );
}
