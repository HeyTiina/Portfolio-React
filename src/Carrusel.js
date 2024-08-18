import React from "react";
import "./Carrusel.css";
import Valentina from "./Valentina.jpg";

export default function Carrusel() {
  return (
    <section className="knowledge-section">
      <h1 className="title">
        Thank you Google Career Certificates and SheCodes!{" "}
      </h1>
      <div className="box">
        <div class="slider">
          <div class="slide-track">
            <div class="slide">
              <img src={Valentina} alt="" />
            </div>
            <div class="slide">
              <img src={Valentina} alt="" />
            </div>
            <div class="slide">
              <img src={Valentina} alt="" />
            </div>
            <div class="slide">
              <img src={Valentina} alt="" />
            </div>
            <div class="slide">
              <img src={Valentina} alt="" />
            </div>
            <div class="slide">
              <img src={Valentina} alt="" />
            </div>
            <div class="slide">
              <img src={Valentina} alt="" />
            </div>
            <div class="slide">
              <img src={Valentina} alt="" />
            </div>
            <div class="slide">
              <img src={Valentina} alt="" />
            </div>
            
            <div class="slide">
              <img src={Valentina} alt="" />
            </div>
            <div class="slide">
              <img src={Valentina} alt="" />
            </div>
            <div class="slide">
              <img src={Valentina} alt="" />
            </div>
            <div class="slide">
              <img src={Valentina} alt="" />
            </div>
            <div class="slide">
              <img src={Valentina} alt="" />
            </div>
            <div class="slide">
              <img src={Valentina} alt="" />
            </div>
            <div class="slide">
              <img src={Valentina} alt="" />
            </div>
            <div class="slide">
              <img src={Valentina} alt="" />
            </div>
            <div class="slide">
              <img src={Valentina} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
