import React from "react";

const Timeline = () => {
  return (
    <div className="mx-auto px-10 my-5">
      <h1 className="balsamiq rounded mx-4 my-6 lg:text-6xl md:text-6xl sm:text-5xl text-6xl text-center ">
        Timeline
      </h1>
      <div className="grid grid-rows-4 gap-4 mx-auto">
        {/* Project Submission */}
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-auto">
          <div className="bg-white rounded-lg shadow-xl lg:p-5 p-5 flex lg:flex-row flex-col sm:flex-col justify-center">
            <h1 className="text-4xl self-center">Project Submission</h1>
            <p className="animate-pulse md:text-2xl lg:md:text-2xl sm:text-lg text-lg self-end bg-red-500 text-white font-mono">
              2nd sept-5th sept
            </p>
          </div>
          <div className="flex justify-center">
            <lottie-player
              src="https://assets3.lottiefiles.com/private_files/lf30_dgKoB3.json"
              className=""
              background="transparent"
              speed="1"
              style={{ width: "300px", height: "300px" }}
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        {/*  */}
        {/* Student Application */}
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-auto">
          <div className="bg-white rounded-lg shadow-xl lg:p-5 p-5 flex lg:flex-row flex-col sm:flex-col justify-center">
            <h1 className="text-4xl self-center">Student Application</h1>
            <p className="animate-pulse md:text-2xl lg:md:text-2xl sm:text-lg text-lg self-end bg-red-500 text-white font-mono">
              6th sept-9th sept
            </p>
          </div>
          <div className="flex justify-center">
            <lottie-player
              src="https://assets10.lottiefiles.com/packages/lf20_Hg1eiy.json"
              className=""
              background="transparent"
              speed="1"
              style={{ width: "300px", height: "300px" }}
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        {/*  */}
        {/* Coding Period */}
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-auto w-full">
          <div className="bg-white rounded-lg shadow-xl lg:p-5 p-5 flex lg:flex-row flex-col sm:flex-col">
            <h1 className="text-4xl self-center">Coding Period</h1>
            <p className="animate-pulse md:text-2xl lg:md:text-2xl sm:text-lg text-lg self-end bg-red-500 text-white font-mono">
              12th sept-30th sept
            </p>
          </div>
          <div className="flex justify-center">
            <lottie-player
              src="https://assets6.lottiefiles.com/packages/lf20_bXRG9q.json"
              className=""
              background="transparent"
              speed="1"
              style={{ width: "300px", height: "300px" }}
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        {/*  */}
        {/* Award Ceremony */}
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-auto w-full">
          <div className="bg-white rounded-lg shadow-xl lg:p-5 p-5 flex lg:flex-row flex-col sm:flex-col justify-center">
            <h1 className="text-4xl self-center">Award Ceremony</h1>
            <p className="animate-pulse md:text-2xl lg:md:text-2xl sm:text-lg text-lg self-end bg-red-500 text-white font-mono">
              1st Oct-2nd Oct
            </p>
          </div>
          <div className="flex justify-center">
            <lottie-player
              src="https://assets7.lottiefiles.com/packages/lf20_aqAp8Z.json"
              className=""
              background="transparent"
              speed="1"
              style={{ width: "300px", height: "300px" }}
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Timeline;
