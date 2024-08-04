import React from "react";
import "./Knowledge.css";

import HTML from "./icons/html.png";
import CSS from "./icons/css.png";
import JavaScript from "./icons/javascript.png";
import VSCode from "./icons/vscode.png";
import API from "./icons/api.png";
import Git from "./icons/git.png";
import GitHub from "./icons/github.png";
import Hosting from "./icons/hosting.png";
import AI from "./icons/ai.png";
import Bootstrap from "./icons/bootstrap.png";
import SEO from "./icons/seo.png";
import Responsive from "./icons/responsive.png";
import ReactIcon from "./icons/react.png";
import Loading from "./icons/loading.png";

export default function Knowledge() {
  return (
    <section className="knowledge-section">
      <h1>Languages and Tools</h1>
      <div className="grid-container">
        {[
          { icon: HTML, text: "HTML" },
          { icon: CSS, text: "CSS" },
          { icon: JavaScript, text: "JavaScript" },
          { icon: VSCode, text: "VSCode" },
          { icon: API, text: "API" },
          { icon: Git, text: "Git" },
          { icon: GitHub, text: "GitHub" },
          { icon: Hosting, text: "Hosting" },
          { icon: AI, text: "AI" },
          { icon: Bootstrap, text: "Bootstrap" },
          { icon: SEO, text: "SEO" },
          { icon: Responsive, text: "Responsive" },
          { icon: ReactIcon, text: "React" },
          { icon: Loading, text: "" },
        ].map((item, index) => (
          <div key={index} className="grid-item">
            <img className="icon" src={item.icon} alt={item.text} />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
