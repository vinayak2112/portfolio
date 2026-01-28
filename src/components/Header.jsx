import React from "react";
import Navbar from "./Navbar";
import { personalInfo } from "../data/information";

function Header() {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          Hello, my name is <span>{personalInfo.name}</span>
        </h1>

        <h2 className="details">{personalInfo.title}</h2>

        <p className="details">{personalInfo.tagline}</p>

        <div className="header-btns">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="cv-btn"
          >
            GitHub
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="cv-btn1"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="arrow"></div>
    </div>
  );
}

export default Header;
