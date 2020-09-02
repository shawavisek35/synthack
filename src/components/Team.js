import React from "react";
import "./assets/team.css";
const Team = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="balsamiq rounded lg:text-6xl md:text-6xl sm:text-5xl text-6xl text-center ">
        Team
      </h1>
      
<a href="https://studentambassadors.microsoft.com/en-US/profile/4447/">
  <div class="row">
  <div class="column">
    <div class="card">
      <img src={require("./Images/sagnik.png")} alt="Jane" style={{width:100%}}>
      <div class="container">
        <h2>Sagnik Chattopadhyaya</h2>
        <p class="title">Microsoft Learn Student Ambassador at CIEM</p>
        <p>I'm enthusiastic about coding and trying to automate my life 1%
          at a time. I plan on integrating ML, Web and AI in the future for the
          betterment of mankind.</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</a>

<a href="http://avisekcode.netlify.app/">
  <div class="row">
  <div class="column">
    <div class="card">
      <img src={require("./Images/avisek.png")} alt="Avisek" style={{width:100%}}>
      <div class="container">
        <h2>Avisek Shaw</h2>
        <p class="title">Developer Student Clubs Lead at CIEM</p>
        <p>Data Science enthusiast and a competitive programmer. Love to automate things through scripting.</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</a>
  );
};

export default Team;
