import React from "react";

function Experience() {
  const experiences = [
    {
      company: "Teach For India",
      role: "Associate, Web Development",
      period: "Aug 2023 - Present",
      location: "India",
      highlights: [
        "Revamped Application Portal (React, Node.js, MongoDB), improving load time by 20%",
        "Integrated Salesforce with bidirectional triggers, reducing recruiter effort by 30%",
        "Built video proctoring + transcription pipeline using AWS S3 & OpenAI Whisper",
        "Automated recurring database tasks, reducing human errors by 15%",
        "Fixed 50+ bugs and collaborated with 4 developers on code reviews",
      ],
    },
    {
      company: "Hexaware Technologies",
      role: "Associate Software Engineer",
      period: "Dec 2022 - Apr 2023",
      location: "India",
      highlights: [
        "Transferred PL/SQL packages to SQL format for Oracle to Snowflake migration",
        "Mastered collaborative software development using Git and GitHub",
      ],
    },
    {
      company: "Hexaware Technologies",
      role: "Graduate Engineer Trainee",
      period: "June 2022 - Dec 2022",
      location: "India",
      highlights: [
        "Engaged in comprehensive software development fundamentals training",
        "Received training in version control and best coding practices",
      ],
    },
  ];

  return (
    <div id="experience">
      <div className="exp-heading">
        <h1>Experience</h1>
        <p>My professional journey</p>
      </div>
      <div className="timeline">
        {experiences.map((exp, index) => (
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
