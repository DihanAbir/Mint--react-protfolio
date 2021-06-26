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
          <div className="col-md-6 mt-4">
            <img
              style={{ objectFit: "cover", width: "100%", height: "400px" }}
              src={props.preview}
              alt="project"
            />
          </div>
          <div className="col-md-6 projectdetails">
            <h4 className="font30 weight800">{props.title}</h4>
            <h4 className="font12 weight500">{props.tag}</h4>
            <a
              href={props.link}
              // rel="noopener noreferrer"
              target="_blank"
            >
              <button className="btn-custom">Live</button>
            </a>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-6 projectdetails">
            <h4 className="font30 weight800">{props.title}</h4>
            <h4 className="font12 weight500">{props.tag}</h4>
            <a
              href={props.link}
              // rel="noopener noreferrer"
              target="_blank"
            >
              <button className="btn-custom">Live</button>
            </a>
          </div>
          <div className="col-md-6 mt-5">
            <img
              style={{ objectFit: "cover", width: "100%", height: "400px" }}
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
