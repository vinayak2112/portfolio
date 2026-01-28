import React from "react";
import { experienceData } from "../data/information";

function Experience() {
  return (
    <div id="experience">
      <div className="exp-heading">
        <h1>{experienceData.heading}</h1>
        <p>{experienceData.subheading}</p>
      </div>
      <div className="timeline">
        {experienceData.experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{exp.role}</h3>
                <span className="company">{exp.company}</span>
              </div>
              <div className="timeline-period">{exp.period}</div>
              <ul className="timeline-highlights">
                {exp.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
