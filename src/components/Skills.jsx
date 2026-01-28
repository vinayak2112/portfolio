import React from "react";
import { skillsData } from "../data/information";
import { TechIcons } from "../data/icons";

function Skills() {
  return (
    <div id="skills">
      <div className="skills-heading">
        <h1>{skillsData.heading}</h1>
        <p>{skillsData.subheading}</p>
      </div>
      <div className="skills-container">
        {skillsData.skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <span className="skill-icon">{TechIcons[skill.iconKey]}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
