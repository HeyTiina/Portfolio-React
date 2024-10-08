import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div>
        This project was coded by{" "}
        <a href="https://github.com/HeyTiina" target="_blank" rel="noreferrer">
          Valentina Bastidas C.
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/HeyTiina?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          on GitHub
        </a>{" "}
        and{" "}
        <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
          hosted on Netlify
        </a>
      </div>
    </footer>
  );
}
