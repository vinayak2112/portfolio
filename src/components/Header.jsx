import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          Hello, my name is <span>Vinayak Nandikole</span>
        </h1>

        <h2 className="details">Full Stack Developer (MERN)</h2>

        <p className="details">
          Building scalable web applications, backend systems, and real-world
          solutions used in production.
        </p>

        <div className="header-btns">
          <a
            href="https://github.com/vinnu9112"
            target="_blank"
            rel="noreferrer"
            className="cv-btn"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/vinayak-nandikole"
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
