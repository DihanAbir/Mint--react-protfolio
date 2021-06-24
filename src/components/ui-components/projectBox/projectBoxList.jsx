import React from "react";
import { Link } from "react-scroll";
// Scss
import "./projectBox.scss";

function projectBoxList(props) {
  const alignVal = parseInt(props.value);
  console.log(typeof alignVal);
  return (
    <div>
      {alignVal % 2 === 0 ? (
        <div className="row">
          <div className="col-md-6">
            <img
              style={{ objectFit: "cover", width: "100%", height: "" }}
              src={props.preview}
              alt="project"
            />
          </div>
          <div className="col-md-6">
            <p className="font12 weight500">{props.tag}</p>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-6">
            <p className="font12 weight500">{props.tag}</p>
          </div>
          <div className="col-md-6">
            <img
              style={{ objectFit: "cover", width: "100%", height: "" }}
              src={props.preview}
              alt="project"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default projectBoxList;
