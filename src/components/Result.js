import React from "react";
import { result } from "../shared/result";

const Team = () => {
  return (
    <div className="container text-center">
      <h1
        className="balsamiq rounded lg:text-6xl md:text-6xl sm:text-5xl text-6xl text-center "
        style={{ marginBottom: "2%" }}
      >
        Winners 🏆
      </h1>
      {result.map((i) => (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 px-10 text-center"
          style={{ paddingBottom: "3%" }}
        >
          <div style={{ paddingLeft: "40%" }}>
            <img
              src={require(`./Images/Winners/${i.img}.png`)}
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
              <strong>Repository worked on: </strong> <em> {i.repo}</em>
            </p>
            <strong>Mentor Review: </strong>
            {i.review}
            <br />
            <div className="animate-bounce inline-block text-sm px-4 py-2 leading-none hover:border-transparent hover:text-red-600 mt-4 lg:mt-0">
              <br />
              <a
                href={i.plink}
                class="px-4 py-2 bg-green-500 text-white rounded-full"
              >
                Get Certificate
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
