import React from "react";
import teamMembers from "./MemberDetail";

const Team = () => {
  return (
    <div className="container text-center">
      <h1
        className="balsamiq rounded lg:text-6xl md:text-6xl sm:text-5xl text-6xl text-center "
        style={{ marginBottom: "2%" }}
      >
        Team
      </h1>
      {teamMembers.map((i) => (
        <a href={i.plink}>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 px-10 text-center"
            style={{ paddingBottom: "3%" }}
          >
            <div style={{ paddingLeft: "40%" }}>
              <img
                src={require(`./Images/${i.img}.png`)}
                style={{
                  height: "55%",
                  width: "55%",
                }}
                alt="profile-img"
                className="grid grid-cols-1"
              ></img>
            </div>

            <div className="text-left">
              <h1 className="mt-5">
                <b className="text-2xl">{i.name}</b>
              </h1>

              <p className="text-l" style={{ paddingRight: "15%" }}>
                <em> {i.role}</em>
                <br />
                <br /> {i.into}
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Team;
