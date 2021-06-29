import React from "react";
// SCSS
import "./teamInfo.scss";

const about = () => (
  <div className="team__info flex-center">
    <div>
      <h4 className="font20 weight800">Little About Me</h4>
      <p className="font12 weight500">
        This is Abir, who can help to build any kind of dynamic websites and
        mobile application. My main stack is MERN and for Mobile application, I
        use MERN(react-native)
      </p>
      <a
        target="_blank"
        href="https://github.com/DihanAbir"
        className="font12 weight500"
      >
        Read More
      </a>
    </div>
  </div>
);

export default about;
