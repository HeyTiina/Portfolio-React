import React from "react";
import "./About.css";

import Mallorca from "./locations/Mallorca.jpg";
import Cali from "./locations/Cali.jpg";
import Zurich from "./locations/Zurich.jpg";

import Spain from "./flags/Spain.png";
import Colombia from "./flags/Colombia.png";
import Switzerland from "./flags/Switzerland.png";



export default function About() {
  return (
    <section className="about">
      <h1 className="title">About me</h1>
      <div>
        <div className="container">
          <div className="location special-border">
            <img className="country" src={Cali} alt="Cali" />
            <h3>
              Born in Cali{" "}
              <span>
                <img className="flag" src={Colombia} alt="Colombia" />
              </span>
            </h3>
            <div className="text-location">
              Developed a love for board games, video games, role games and
              every other combination you can think of with the word “game” in
              it.
            </div>
          </div>
          <div className="location">
            <img className="country" src={Mallorca} alt="Mallorca" />
            <h3>
              Raised in Mallorca{" "}
              <span>
                <img className="flag" src={Spain} alt="Spain" />
              </span>
            </h3>
            <div className="text-location">
              Studied and worked at the same time in arguably the most
              challenging environment that is catering services in a touristic
              hub. You can count on expert skills I gained like:{" "}
              <ul>
                <li>Working under pressure and not dying,</li>
                <li>Adapting to changes big and small,</li>
                <li>Learning new skills, real fast,</li>
                <li>Problem-solving everything.</li>
              </ul>{" "}
              Skills that I definitely use in my IT projects. Because yes, I’ve
              been surrounded by geeky friends, which was contagious.
            </div>
          </div>
          <div className="location special-border2">
            <img className="country" src={Zurich} alt="Zurich" />
            <h3>
              Living in Zürich{" "}
              <span>
                <img className="flag" src={Switzerland} alt="Switzerland" />
              </span>
            </h3>

            <div className="text-location">
              Took the opportunity to really focus on becoming a developer
              besides my day-work by enrolling in several courses. <br></br>{" "}
              <br></br>I still have a lot more to learn but the journey so far
              has been really fun and interesting. I am looking forward to
              working on many projects with amazing people to build beautifully
              designed digital solutions.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
