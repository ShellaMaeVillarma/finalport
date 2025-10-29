import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <h1
        className="logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        Shella
      </h1>
      <ul className="nav-links">
        <li 
          className={isActive("/about") ? "active" : ""}
          onClick={() => navigate("/about")}
        >
          About
        </li>
        <li 
          className={isActive("/project") ? "active" : ""}
          onClick={() => navigate("/project")}
        >
          Project
        </li>
        <li 
          className={isActive("/contact") ? "active" : ""}
          onClick={() => navigate("/contact")}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;