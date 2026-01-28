import React from "react";
import { projectsData } from "../data/information";

function Projects() {
  return (
    <div id="services">
      <div className="s-heading">
        <h1>{projectsData.heading}</h1>
        <p>{projectsData.subheading}</p>
      </div>

      <h2 className="project-category">{projectsData.professionalCategory}</h2>
      <div className="pro-container">
        {projectsData.professionalProjects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="pro-card"
            key={index}
          >
            <div className="pro-header">
              <h3>{project.title}</h3>
              <span className="pro-company">{project.company}</span>
            </div>
            <span className="pro-tech">{project.tech}</span>
            <p>{project.description}</p>
            <div className="pro-highlights">
              {project.highlights.map((h, i) => (
                <span key={i} className="highlight-tag">
                  {h}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      <h2 className="project-category">{projectsData.personalCategory}</h2>
      <div className="personal-container">
        {projectsData.personalProjects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="personal-card"
            key={index}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
