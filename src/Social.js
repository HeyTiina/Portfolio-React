import React from "react";
import linkedinIcon from "./IconsSocial/linkedin.png";
import instagramIcon from "./IconsSocial/instagram.png";
import githubIcon from "./IconsSocial/github.png";
import "./Social.css";

const socialMedia = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/valentina-bastidas-castillo-654652266/",
    icon: linkedinIcon,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/hey.tiina/",
    icon: instagramIcon,
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
      className="social-icons"
    />
  </a>
);

const Social = () => (
  <section className="social">
    <h1>Let's get in touch!</h1>
    <h3> I'm always looking for new opportunities. Feel free to contact me!</h3>
    <div className="grid-container-social">
      {socialMedia.map((socialMediaItem) => (
        <div key={socialMediaItem.name} className="grid-item">
          <SocialMediaItem socialMedia={socialMediaItem} />
        </div>
      ))}
    </div>
  </section>
);

export default Social;
