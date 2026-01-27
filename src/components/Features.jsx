import React from "react";
import featureimage from "../images/pp.JPG";
import pdf from "../images/resume.pdf";

function Features() {
  return (
    <div id="features">
      <div className="features-model">
        <img src={featureimage} alt="featureimg" />
      </div>

      <div className="features-right">
        <div className="features-header">
          <h1 className="desktop-heading">Professional Overview</h1>
          <h1 className="mobile-heading">About Me</h1>
        </div>

        <div className="features-text">
          <p>
            I am a Full Stack Developer with hands-on experience building and
            maintaining production-grade web applications using the MERN stack.
            Currently part of the Teach For India Technology Team, I work on
            systems that support large-scale recruitment, assessments, and
            operational workflows across multiple cities in India.
          </p>

          <p>
            My work involves designing scalable backend APIs, integrating
            third-party platforms like Salesforce, building secure media upload
            pipelines using AWS S3, and implementing video-based assessment and
            proctoring workflows. I focus strongly on clean architecture,
            performance optimization, and writing maintainable code that works
            reliably in real-world scenarios.
          </p>

          <div className="header-btns">
            <a download="Vinayak_Nandikole.pdf" href={pdf} className="cv-btn2">
              <button>Download CV</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
