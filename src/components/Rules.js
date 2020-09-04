import React from "react";

const Rules = () => {
  return (
    <div>
      <h1 className="balsamiq shadow-lg lg:shadow-none md:shadow-none rounded mx-4 my-6 lg:text-6xl md:text-6xl text-4xl text-center">
        Rules
      </h1>
      <ul class="list-disc mx-8">
        {rules.map((rule) => (
          <li className="balsamiq ml-2 text-2xl my-8" key={rule}>
            {rule}
          </li>
        ))}
      </ul>
    </div>
  );
};

const rules = [
  "Only presently enrolled students of Calcutta Institute of Engineering and Management(CIEM),Kolkata are eligible to participate as Student.",
  "As a Mentor anyone is free to participate. But you can mentor only those projects that you submit",
  "Submitting Project does not garuntee you participation as a Mentor, It depends on whether any student submits propasal on it or not.",
  "All disputes are to be addressed to the Organizers directly. The College Authority isn't responsible for handling the disputes.",
  "Please note, applications sent after the deadline cannot be considered for judging.",
  "More than one Proposal as a student is not allowed. But you can definitely submit multiple projects.",
  "If more than one proposal is given then only the first one will be taken under consideration.",
  "Before start of the coding session, if you wish to discuss with Project Mentors then create a Issue and discuss.",
  "After the conclusion of the event on 30th September the review of the mentors would be taken into consideration by the organizing team for the final evaluation of the participants and the result would be declared by 2nd October.",
  "We will use Discord as a Medium for communication between mentors, students and organisers. No other medium will be considered a official. And we discourage any other medium for communication.",
  "Any disputes occuring while discussing in other medium won't be entertained. ",
  "The decision taken by the Organizing Team will be taken as final one no further considerations will be done.",
  "The rules and regulations are subject to change without any notice."
];

export default Rules;
