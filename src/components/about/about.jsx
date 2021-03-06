import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import TeamBox from "./teamBox";
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
// Assets
import Person01 from "../../assets/about/app.jpeg";
import Person02 from "../../assets/about/web.png";

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="ABOUT" />

      <Row>
        <Col md={12} lg={4}>
          <TeamBox avatar={Person01} name="" job="Web Developer" />
        </Col>
        <Col md={12} lg={4}>
          <TeamBox avatar={Person02} name="" job="App developer" />
        </Col>
        <Col md={12} lg={4}>
          <TeamInfo />
        </Col>
      </Row>
    </div>
  </div>
);

export default about;
