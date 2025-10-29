import React from "react";

import profile from "../assets/shella.png"; // make sure this path is correct

function About() {
  return (
    <section className="about-page">
   
      <div className="about-container">
        <div className="about-left">
          <img src={profile} alt="Shella" className="about-img" />
        </div>

        <div className="about-right">
          <h1>So, Who Am I?</h1>
          <p>
            Hello! I’m <strong>Shella Mae Villarma</strong>, a passionate{" "}
            <strong>UI/UX Designer</strong> dedicated to crafting user-centered
            digital experiences. I love transforming creative ideas into
            meaningful, modern designs.
          </p>
          <p>
            Building and creating web designs is not just my speciality — it’s
            what I enjoy most. My goal is to make simplicity both beautiful and
            functional.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
