import React from "react";
import {Timelines} from "../shared/timeline";
import "../assets/timeline.css";

const Timeline = () => {
  return (
    <ul class="cbp_tmtimeline">
      {
        Timelines.map((timeline) => {
          return (
          <li>
            <time className="cbp_tmtime text-sm md:text-lg" datetime="2013-04-10 18:30"><span>{timeline.time}</span></time>
            <div class="cbp_tmicon cbp_tmicon-phone"></div>
            <div class="cbp_tmlabel">
              <h2 className="text-2xl">{timeline.name}</h2>
              <p><a href={timeline.link} target="_blank" rel="noopener noreferrer"><button className="bg-yellow-500 hover:bg-yellow-800 text-white font-bold py-2 px-4 my-4 rounded-full">{timeline.status}</button></a></p>
            </div>
          </li>
          )
        })
      }
      
    </ul>
  );
};

export default Timeline;
