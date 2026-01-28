import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { navItems } from "../data/information";

function Navbar() {
  const [activeSection, setActiveSection] = useState("main");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if we're at the bottom of the page
      const isAtBottom = scrollTop + windowHeight >= documentHeight - 50;

      if (isAtBottom) {
        setActiveSection("subscribe");
        return;
      }

      // Get all section positions
      const sections = navItems.map((item) => item.to);
      const offset = 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= offset) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }

      setActiveSection("main");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <input type="checkbox" className="menu-btn" id="menu-btn" />
            <label htmlFor="menu-btn" className="menu-icon">
              <span className="nav-icon"></span>
            </label>
            <ul className="menu">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={activeSection === item.to ? "active" : ""}
                    smooth={true}
                    duration={1000}
                    offset={-50}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
