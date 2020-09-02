import React from "react";
const Team = () => {
  return (
    <div className="container text-center">
      <h1 className="balsamiq rounded lg:text-6xl md:text-6xl sm:text-5xl text-6xl text-center ">
        Team
      </h1>
      <div
        style={{ marginTop: "2%" }}
        className="grid grid-cols-1 sm:grid-cols-2 px-10 text-center"
      >
        <div style={{ paddingLeft: "40%" }}>
          <img
            src={require("./Images/sagnik.png")}
            style={{
              height: "55%",
              width: "55%",
            }}
            alt="Sagnik-img"
            className="grid grid-cols-1"
          ></img>
        </div>
        <div className="text-left">
          <h1 className="mt-5">
            <a href="https://studentambassadors.microsoft.com/en-US/profile/4447/">
              <b className="text-2xl">Sagnik Chattopadhyaya</b>
            </a>
          </h1>

          <p className="text-l">
            <em> Microsoft Learn Student Ambassador at CIEM, Kolkata.</em>
            <br />
            <br /> I'm enthusiastic about coding and trying to automate my life
            1% at a time.
            <br /> I plan on integrating ML, Web and AI in the future for the
            betterment of mankind.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 px-10 text-center my-10">
        <div style={{ paddingLeft: "40%" }}>
          <img
            src={require("./Images/avisek.png")}
            style={{
              height: "55%",
              width: "55%",
            }}
            alt="avisek-img"
          ></img>
        </div>
        <div className="text-left">
          <h1 className="mt-5 text-2xl">
            <a href="http://avisekcode.netlify.app/">
              <b>Avisek Shaw</b>
            </a>
          </h1>

          <p className="text-l">
            <em>Developer Student Clubs Lead at CIEM, kolkata.</em>
            <br />
            <br /> Data Science enthusiast and a competitive programmer.
            <br /> Love to automate things through scripting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
