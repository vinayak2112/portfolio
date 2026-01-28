import React from "react";
import { contactData } from "../data/information";
import { SocialIcons } from "../data/icons";

function Contact() {
  return (
    <div id="subscribe">
      <h3>{contactData.heading}</h3>
      <div className="subscribe-img">
        {contactData.socialLinks.map((social, index) => (
          <a key={index} href={social.url} target="_blank" rel="noreferrer">
            {SocialIcons[social.iconKey]}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;
