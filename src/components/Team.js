import React from "react";
const Team = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="balsamiq rounded lg:text-6xl md:text-6xl sm:text-5xl text-6xl text-center ">
        Team
      </h1>
      <div style={{ marginTop: "2%" }}>
        <img
          src={require("./Images/sagnik.png")}
          style={{
            height: "200px",
            width: "200px",
            marginLeft: "20%",
            float: "left",
            paddingRight: "15px",
            marginRight: "5%",
          }}
          alt="Sagnik-img"
        ></img>
        <br />

        <h1 style={{ textAlign: "left", fontSize: "2vw" }}>
          <a href="https://studentambassadors.microsoft.com/en-US/profile/4447/">
            <b>Sagnik Chattopadhyaya</b>
          </a>
        </h1>

        <p style={{ textAlign: "left" }}>
          <em> Microsoft Learn Student Ambassador at CIEM, Kolkata.</em>
          <br />
          <br /> I'm enthusiastic about coding and trying to automate my life 1%
          at a time.
          <br /> I plan on integrating ML, Web and AI in the future for the
          betterment of mankind.
        </p>
      </div>

      <div style={{ marginTop: "8%", marginBottom: "10%" }}>
        <img
          src={require("./Images/avisek.png")}
          style={{
            height: "200px",
            width: "200px",
            marginLeft: "20%",
            float: "left",
            paddingRight: "15px",
            marginRight: "5%",
          }}
          alt="avisek-img"
        ></img>

        <br />

        <h1 style={{ textAlign: "left", fontSize: "2vw" }}>
          <a href="http://avisekcode.netlify.app/">
            <b>Avisek Shaw</b>
          </a>
        </h1>

        <p style={{ textAlign: "left" }}>
          <em>Developer Student Clubs Lead at CIEM, kolkata.</em>
          <br />
          <br /> Data Science enthusiast and a competitive programmer.
          <br /> Love to automate things through scripting.
        </p>
      </div>
    </div>
  );
};

export default Team;
