import React from "react";
import { useNavigate } from "react-router-dom";
import profile from "../assets/SLV.png";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="home">
      <div className="home-container">
        <div className="home-left">
          <img src={profile} alt="Shella" className="home-img" />
        </div>

        <div className="home-right">
          <h1 className="home-title">
            Hello, I'm <span>Shella</span>
          </h1>
          <h3 className="home-subtitle">UI/UX Designer</h3>
          <p className="home-quote">
            "Your website is your brand’s digital home — make it welcoming."
            <br />
            <span className="quote-author">– Shella Mae V.</span>
          </p>

          <button className="btn" onClick={() => navigate("/about")}>
            About Me
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
