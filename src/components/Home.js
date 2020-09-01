import React from "react";
import Timeline from "./timeline";
// import newTimeline from "./newTimeline";

const Home = () => {
  return (
    <div>
      <h1 className="my-6 lg:text-6xl md:text-6xl sm:text-5xl text-6xl text-center">
        <span className="animate-pulse" role="img" aria-label="emoji">
          🔥
        </span>{" "}
        Synthax
      </h1>
      <h1 className="text-center text-2xl mb-4 mx-4">
        An Open Source Coding Festival for CIEM, Kolkata{" "}
      </h1>
      <div className="mx-8 p-6 w-auto rounded shadow-xl bg-white">
        <p className="text-xl mt-2">Hello Developers!</p>
        <p className="text-xl mt-2">
          {" "}
          <strong>DSC-CIEM</strong> in collaboration with{" "}
          <strong>MLSA-CIEM</strong> and <strong>Palinoia</strong> is happy to
          announce it's first Open Source coding fest, Synthax
        </p>
        <p className="text-xl mt-2">
          This month long journey is the perfect opportunity to brush up on your
          skills and take it a notch higher. Beginners, we'll be there to guide
          you in every step so don't worry. We'll be having a lot of projects
          with exclusive project mentors for each. On successful completion, you
          will get Certificates and Top performers will get special schwag.{" "}
          <span role="img" aria-label="emoji">
            🎊
          </span>
        </p>
      </div>
      <Timeline />
    </div>
  );
};

export default Home;
