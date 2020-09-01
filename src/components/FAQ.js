import React from "react";

const FAQ = () => {
  return (
    <div>
      <h1 className="shadow-lg lg:shadow-none md:shadow-none rounded mx-4 my-6 lg:text-6xl md:text-6xl sm:text-4xl text-4xl text-center text-red-700">
        Frquently Asked Questions
      </h1>
      <div className={`grid grid-rows-${FAQs.length} py-4 gap-4 mx-4 dead-center`}>
        {FAQs.map((item) => (
          <div
            key={item.q}
            className="flex flex-col mx-auto justify-content-around items-center bg-white p-5 lg:w-4/5 w-full h-full rounded shadow-xl"
          >
                <h1 className="text-4xl mb-4 text-red-700">Q : {item.q}</h1>
            <h1 className="text-3xl">A : {item.a}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

const FAQs = [
  {
    q: "Who are eligible to participate?",
    a: "All presently enrolled CIEM students are eligible to participate.",
  },
  {
    q: "What is the selection criteria?",
    a: "Candidates will be selected based on their submitted proposal.",
  },
  {
    q: "Can I submit more than one proposal?",
    a:
      "No. One cannot submit more than one proposal. If a candidate submits more than one proposal only the first one would be taken into consideration.",
  },
  {
    q: "How will I know whether I am selected or not?",
    a: "All selected candidates will be notified via email.",
  },
  {
    q: "Whom should I contact in case I have any doubt or dispute?",
    a:
      "You should contact the mentor or any of the organisers on Discord channel. The college authority is nowhere responsible in resolving your doubts or disputes.",
  },
  {
    q: ` Do I need to pay any fees to take part in this event? `,
    a: `No. You need not to pay a single penny to participate in this event.`,
  },
];

export default FAQ;
