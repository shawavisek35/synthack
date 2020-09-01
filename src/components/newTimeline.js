import React from "react";
const newTimeline = () => {
  return (
    <div>
      {/* The Timeline */}
      <ul className="timeline">
        {/* Item 1 */}
        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="flag">Freelancer</span>
              <span className="time-wrapper">
                <span className="time">2013 - present</span>
              </span>
            </div>
            <div className="desc">
              My current employment. Way better than the position before!
            </div>
          </div>
        </li>
        {/* Item 2 */}
        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="flag">Apple Inc.</span>
              <span className="time-wrapper">
                <span className="time">2011 - 2013</span>
              </span>
            </div>
            <div className="desc">
              My first employer. All the stuff I've learned and projects I've
              been working on.
            </div>
          </div>
        </li>
        {/* Item 3 */}
        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="flag">Harvard University</span>
              <span className="time-wrapper">
                <span className="time">2008 - 2011</span>
              </span>
            </div>
            <div className="desc">
              A description of all the lectures and courses I have taken and my
              final degree?
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default newTimeline;
