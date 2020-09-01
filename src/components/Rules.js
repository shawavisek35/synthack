import React from "react";

const Rules = () => {
  return (
    <div>
      <h1 className="shadow-lg lg:shadow-none md:shadow-none rounded mx-4 my-6 lg:text-6xl md:text-6xl sm:text-5xl text-6xl text-center text-red-700">
        Rules
      </h1>
      <ol class="list-decimal mx-8">
        {rules.map((rule) => (
          <li className="ml-2 text-xl mt-4" key={rule}>
            {rule} <hr className="mt-2 border-double border-1 border-red-700" />
          </li>
        ))}
      </ol>
    </div>
  );
};

const rules = [
  "Only presently enrolled CIEM candidates are eligible to participate.",
  "All disputes are to be addressed to the organizers. The College Authority isn't responsible for handling the disputes.",
  "Please note, applications sent after the deadline cannot be considered for judging.",
  "We’d recommend team members not to fill out the application form at the same time, as this can result in loss of data.",
  "More than one Proposal is not allowed",
  "If more than one proposal is given then only the first one will be taken under consideration.",
  "Before asking a mentor about contributing early, please check if they have already given details or answered a question about it in the project details or comments in the Teams App.",
  "After the conclusion of the event on ___________ the leaderboards of the mentors would be taken into consideration by the organizing team for the final evaluation of the participants and the result would be declared by ___________.",
  "The decision taken by the organizing team will be taken as the final one no further considerations will be done.",
];

export default Rules;
