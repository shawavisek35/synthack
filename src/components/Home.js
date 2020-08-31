import React from "react";

const Home = () => {
  return (
    <div>
      <h1 className="my-6 lg:text-6xl md:text-6xl sm:text-5xl text-6xl text-center">
        Presenting Synthax{" "}
        <span className="animate-pulse text-red-700">v1.0</span>
      </h1>
      <div className="mx-8 p-6 w-auto rounded shadow-xl">
        <p className="text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
    </div>
  );
};

export default Home;
