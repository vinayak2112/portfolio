import React from "react";
import { achievementsData } from "../data/information";
import { AchievementIcons } from "../data/icons";

function Achievements() {
  return (
    <div id="achievements">
      <div className="ach-heading">
        <h1>{achievementsData.heading}</h1>
        <p>{achievementsData.subheading}</p>
      </div>

      <div className="ach-container">
        <div className="ach-section">
          <h2>{achievementsData.achievementsCategory}</h2>
          <div className="ach-grid">
            {achievementsData.achievements.map((ach, index) => (
              <a
                href={ach.link}
                target="_blank"
                rel="noreferrer"
                className="ach-card"
                key={index}
              >
                <span className="ach-icon">
                  {AchievementIcons[ach.iconKey]}
                </span>
                <h3>{ach.title}</h3>
                <span className="ach-subtitle">{ach.subtitle}</span>
                <p>{ach.description}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="ach-section">
          <h2>{achievementsData.certificationsCategory}</h2>
          <div className="cert-grid">
            {achievementsData.certifications.map((cert, index) => (
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="cert-card"
                key={index}
              >
                <span className="cert-icon">
                  {AchievementIcons[cert.iconKey]}
                </span>
                <div className="cert-info">
                  <h3>{cert.name}</h3>
                  <span>{cert.issuer}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
