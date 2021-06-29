import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Assets
import HeroImage from "../../assets/hero/Dihan propic .jpg";
// import HeroImage from "../../assets/hero/333edited.jpg";
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
            <p className="paraabout">
              A passionate web developer who enthusiast the development of a
              website. I have a <b>1.6-year's of working experience</b> by doing
              several web project. Always tried to find real-life problems and
              try to find an efficient solution using my critical thinking
              ability.
            </p>
            <div className="contactinfo">
              <Button
                className="contbutton"
                label="SEND MESSAGE"
                target={"contact"}
              />
              <a
                target="_blank"
                href="https://www.upwork.com/freelancers/~01e8b1c7043920a1f5"
              >
                <button className="contbtnu contbtn">Upwork</button>
              </a>
              <a
                target="_blank"
                href="https://www.fiverr.com/nahidabir?up_rollout=true"
              >
                <button className="contbtnf contbtn">Fiverr</button>
              </a>
            </div>
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
