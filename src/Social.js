import React from "react";
import linkedinIcon from "./IconsSocial/linkedin.png";
import instagramIcon from "./IconsSocial/instagram.png";
import githubIcon from "./IconsSocial/github.png";
import "./Social.css";

const socialMedia = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/hey.tiina/",
    icon: instagramIcon,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/valentina-bastidas-castillo-654652266/",
    icon: linkedinIcon,
  },
  {
    name: "GitHub",
    url: "https://github.com/HeyTiina",
    icon: githubIcon,
  },
];

const SocialMediaItem = ({ socialMedia }) => (
  <a href={socialMedia.url} target="_blank" rel="noopener noreferrer">
    <img
      src={socialMedia.icon}
      alt={socialMedia.name}
    />
  </a>
);

const Social = () => (
  <section className="social">
    <h1 className="title">Let's get in touch!</h1>

    <div className="rrss-container">
      {socialMedia.map((socialMediaItem) => (
        <div key={socialMediaItem.name} className="rrss">
          <SocialMediaItem socialMedia={socialMediaItem} />
        </div>
      ))}
    </div>

  </section>
);

export default Social;
