import React from "react";
import "./Knowledge.css";

import HTML from "./IconsT&L/html.png";
import CSS from "./IconsT&L/css.png";
import JavaScript from "./IconsT&L/javascript.png";
import VSCode from "./IconsT&L/vscode.png";
import API from "./IconsT&L/api.png";
import Git from "./IconsT&L/git.png";
import GitHub from "./IconsT&L/github.png";
import Hosting from "./IconsT&L/hosting.png";
import AI from "./IconsT&L/ai.png";
import Bootstrap from "./IconsT&L/bootstrap.png";
import SEO from "./IconsT&L/seo.png";
import Responsive from "./IconsT&L/responsive.png";
import ReactIcon from "./IconsT&L/react.png";
import Soon from "./IconsT&L/soon.gif";

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
          { icon: Soon, text: "" },
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
