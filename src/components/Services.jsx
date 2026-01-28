import React from "react";

function Services() {
  const professionalProjects = [
    {
      title: "Fellowship Application Portal",
      company: "Teach For India",
      tech: "React • Node.js • MongoDB • MaterialUI",
      description:
        "Full-stack application portal with reusable components, PDF CV downloads, custom modals, Salesforce integration, and video proctoring with transcription pipeline.",
      highlights: [
        "20% faster load time",
        "Salesforce sync",
        "Video proctoring",
      ],
      link: "https://apply.teachforindia.org/",
    },
    {
      title: "Volunteer Management System",
      company: "Teach For India",
      tech: "React • Algolia • FormAssembly",
      description:
        "Serverless React app with Algolia integration for fast search and filtering of volunteer opportunities by city, cluster, availability, and subjects.",
      highlights: ["Fast search", "Pre-filled forms", "Real-time filtering"],
      link: "https://volunteer.teachforindia.org/",
    },
    {
      title: "Impacted Internship Program",
      company: "Teach For India",
      tech: "React • Node.js • MongoDB",
      description:
        "Referral-only application system where opportunities are accessible via special reference keys shared with referred candidates.",
      highlights: ["Secure access", "Role management", "Streamlined flow"],
      link: "https://impacted.teachforindia.org/?applicantID=1234",
    },
  ];

  const personalProjects = [
    {
      title: "Text Utils",
      description:
        "Text analysis tool for word count, character count, and removing extra spaces.",
      link: "https://vinnu9112.github.io/text-utils/",
    },
    {
      title: "To Do List",
      description: "Task management React app for organizing incomplete tasks.",
      link: "https://vinnu9112.github.io/to-do-list/",
    },
    {
      title: "BMI Calculator",
      description:
        "Body Mass Index calculator relating measurements to health and fitness.",
      link: "https://vinnu9112.github.io/bmi-calculator/",
    },
  ];

  return (
    <div id="services">
      <div className="s-heading">
        <h1>Projects</h1>
        <p>Professional work and personal projects</p>
      </div>

      <h2 className="project-category">Professional Projects</h2>
      <div className="pro-container">
        {professionalProjects.map((project, index) => (
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

      <h2 className="project-category">Just for Fun</h2>
      <div className="personal-container">
        {personalProjects.map((project, index) => (
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

export default Services;
