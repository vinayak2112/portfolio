import React from "react";
import featureimage from "../images/pp.JPG";
import pdf from "../images/resume.pdf";
import { aboutData } from "../data/information";

function AboutMe() {
  return (
    <div id="features">
      <div className="features-model">
        <img src={featureimage} alt="featureimg" />
      </div>

      <div className="features-right">
        <div className="features-header">
          <h1 className="desktop-heading">{aboutData.desktopHeading}</h1>
          <h1 className="mobile-heading">{aboutData.mobileHeading}</h1>
        </div>

        <div className="features-text">
          {aboutData.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <div className="header-btns">
            <a download={aboutData.cvFileName} href={pdf} className="cv-btn2">
              <button>Download CV</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
