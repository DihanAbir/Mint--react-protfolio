import React from "react";
import { Link } from "react-scroll";
// Scss
import "./projectBox.scss";

const projectBox = (props) => (
  <div className="portfolio__box ">
    <img src={props.preview} alt="project" />
    <div className="portfolio__hover-info flex-center">
      <div className="text-center">
        <p className="font30 weight800">{props.title}</p>
        <p className="font12 weight500">{props.tag}</p>
        <a
          href={props.link}
          // rel="noopener noreferrer"
          target="_blank"
        >
          <button className="btn-custom">Live</button>
        </a>
        <a
          href={props.github}
          // rel="noopener noreferrer"
          target="_blank"
        >
          <button className="btn-custom2 mx-1">github</button>
        </a>
      </div>
    </div>
  </div>
);

export default projectBox;
