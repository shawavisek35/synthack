import React from "react";

const Apply = () => {
  return (
    <div className="mx-auto flex flex-col items-center">
      <h1 className="animate-bounce shadow-lg lg:shadow-none md:shadow-none rounded mx-4 my-6 lg:text-6xl md:text-6xl sm:text-5xl text-6xl text-center text-red-700">
        Apply Here
      </h1>
      <div className="bg-red-600 w-full px-5 py-10 lg:w-3/5 rounded-lg grid grid-rows-2 shadow-lg gap-12 mt-12">
        <a
          href="https://forms.gle/BWUTatoT57213VDs6"
          className="bg-white rounded shadow-xl text-center py-3 text-4xl border border-transparent hover:border-4 hover:border-white hover:bg-red-600 hover:text-white cursor-pointer"
        >
          <h1>Submit you Project</h1>
        </a>
        <div
          className="bg-white rounded shadow-xl text-center py-3 text-4xl border border-transparent hover:border-4 hover:border-white hover:bg-red-600 hover:text-white cursor-pointer"
        >
          <h1>Students Application</h1>
        </div>
      </div>
    </div>
  );
};

export default Apply;

// Synthax ( Call for Projects )  :   https://forms.gle/BWUTatoT57213VDs6

// Synthax ( Participants)  :  https://forms.gle/fnVWXgvG6ZSajVbN7
