import React from 'react';
import profile from "../assets/foundit.png";
import rentergo from "../assets/rento.png";
import portfolio from "../assets/portfolio.png";
const Project = () => {
  return (
    <div className="project-flow-container">
      <div className="project-header">
        <h1>My Projects</h1>
        <p>A showcase of a project I've participated to built</p>
      </div>

      
      <div className="project-cards-area">

      
        <div className="project-card card-portfolio">
          <div className="card-image-placeholder card-image-portfolio">
            <img src ={portfolio} className="portfolio.png"></img>
           
          </div>
          <h2 className="card-title">Portfolio website</h2>
          <p className="card-description">
            My personal portfolio website showcasing my projects, about me, and contact information.
          </p>
        </div>

        {/* Card 2: FoundIt Website */}
        <div className="project-card card-foundit-website">
          <div className="card-image-placeholder card-image-foundit">
            <img src ={profile} className="foundit.png"></img>
           
          </div>
          <h2 className="card-title">FoundIt(Lost & Found Website)</h2>
          <p className="card-description">
            A web application that wilp those who lose their things.
          </p>
        </div>

        {/* Card 3: RenterGo */}
        <div className="project-card card-rentergo">
          <div className="card-image-placeholder card-image-rentergo">
             <img src ={rentergo} className="rento.png"></img>
          </div>
          <h2 className="card-title">RenterGo(Boarding House Finder)</h2>
          <p className="card-description">
            Under development project, where built to help those who are seeking boarding house inside Iloilo city.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Project;