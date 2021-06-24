import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Assets
import HeroImage from "../../assets/hero/photo-1560250097-0b93528c311a.jpeg";
//Components
import Button from "../ui-components/button/button";

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={6}>
          <div className="hero-info">
            <h1 className="weight800 font60">Hello!!!</h1>
            <h1 className="weight800 font60">This Is Nahid Murad Abir</h1>
            <p className="font12">
              A junior web developer who enthusiast the development of a
              website. I have a 1-year working experience by doing several web
              project. Always tried to find real-life problems and try to find
              an efficient solution using my critical thinking ability.
            </p>
            <Button label="SEND MESSAGE" target={"contact"} />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={HeroImage} alt="hero" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;
