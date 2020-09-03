import React from "react";

const NewTimeline = () => {
  return (
    <div className="mx-auto">
      <h1 className="balsamiq rounded lg:text-6xl md:text-6xl sm:text-5xl text-6xl text-center ">
        Timeline
      </h1>
      <div className="timeline w-4/5 lg:mx-auto w-full lg:w-1/2">
        {timelinez.map((t) => (
          <div className="time" key={t.title}>
            <h1 className="balsamiq text-4xl bg-white rounded shadow-xl text-center">{t.title}</h1>
            <p className="text-2xl balsamiq text-right text-red-600">{t.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const timelinez = [
  { title: "Project Submission", date: "3rd sept-6th sept" },
  { title: "Understanding the Program", date: "7th sept" },
  { title: "Student Application", date: "7th sept-10th sept" },
  { title: "Coding Period", date: "12th sept-30th sept" },
  { title: "Results", date: "1st Oct-2nd Oct" },
];

export default NewTimeline;
