import React from "react";
import "./Knowledge.css";

const icons = {
  HTML: { icon: require("./IconsT&L/html.png"), text: "HTML" },
  CSS: { icon: require("./IconsT&L/css.png"), text: "CSS" },
  JavaScript: {
    icon: require("./IconsT&L/javascript.png"),
    text: "JavaScript",
  },
  VSCode: { icon: require("./IconsT&L/vscode.png"), text: "VSCode" },
  API: { icon: require("./IconsT&L/api.png"), text: "API" },
  Git: { icon: require("./IconsT&L/git.png"), text: "Git" },
  GitHub: { icon: require("./IconsT&L/github.png"), text: "GitHub" },
  Hosting: { icon: require("./IconsT&L/hosting.png"), text: "Hosting" },
  AI: { icon: require("./IconsT&L/ai.png"), text: "AI" },
  Bootstrap: { icon: require("./IconsT&L/bootstrap.png"), text: "Bootstrap" },
  SEO: { icon: require("./IconsT&L/seo.png"), text: "SEO" },
  Responsive: {
    icon: require("./IconsT&L/responsive.png"),
    text: "Responsive",
  },
  React: { icon: require("./IconsT&L/react.png"), text: "React" },
  Python: { icon: require("./IconsT&L/python.png"), text: "Python" },
};

const Icon = ({ icon, text }) => (
  <div className="icon-container">
    <img className="icon" src={icon} alt={text} />
    <p>{text}</p>
  </div>
);

export default function Knowledge() {
  const iconKeys = Object.keys(icons);
  const triplicatedIconKeys = iconKeys.concat(iconKeys).concat(iconKeys);

  return (
    <section className="knowledge">
      <h1>Thank you Google Career Certificates and SheCodes! </h1>
      <div className="box">
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              {triplicatedIconKeys.map((key, index) => (
                <Icon
                  key={index}
                  icon={icons[key].icon}
                  text={icons[key].text}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="little">
        <em>The stuff I know!</em>
      </div>
    </section>
  );
}
