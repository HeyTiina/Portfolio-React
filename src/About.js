import React from "react";
import "./About.css";
import Mallorca from "./locations/Mallorca.jpg";
import Cali from "./locations/Cali.jpg";
import Zurich from "./locations/Zurich.jpg";



export default function About() {
  return (
    <section className="about">
      <h1 className="title">About me</h1>
      <div>
        <div className="container">
          <div className="location special-border">
            <img className="country" src={Cali} alt="Cali" />{" "}
            <h3>Born in Cali, Colombia</h3> <br></br>
            <div className="text-location">
              Developed a love for boardgames, videogames, rol games and every
              other word with the word ‘’games’’ included.
            </div>
          </div>
          <div className="location">
            <img className="country" src={Mallorca} alt="Mallorca" />{" "}
            <h3>Raised in Mallorca, Spain</h3> <br></br>
            <div className="text-location">
              Worked in catering services next to my studies I have developed
              exceptional skills as:{" "}
              <ul>
                <li>working under pressure</li>
                <li>adaptability</li>
                <li>quick learning</li>
                <li>problem-solving</li>
              </ul>{" "}
              Being surrunded by my friends and their interest in IT, they
              helped to build my own interest in it!
            </div>
          </div>
          <div className="location">
            <img className="country" src={Zurich} alt="Zurich" />{" "}
            <h3>Living in zürich, Switzerland</h3> <br></br>
            <div className="text-location">
              Moved to Switzerland, I though that this was the time to make a
              change and enrolled in some online courses.
              <div className="mt-4">
                The journey has been great, a learned a lot and I have still a
                lot more to learn.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
