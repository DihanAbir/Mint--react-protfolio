import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactInfo.scss";

import ContactInfoBox from "../contactInfo/contactInfoBox";

import ContactInfoIcon1 from "../../../assets/contact/contact-info-icon1.svg";
import ContactInfoIcon2 from "../../../assets/contact/contact-info-icon2.svg";
import ContactInfoIcon3 from "../../../assets/contact/contact-info-icon3.svg";

const contactInfo = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={12} lg={3} className="contact__info">
          <ContactInfoBox
            icon={ContactInfoIcon1}
            textLine1="Mirpur-14, Dhaka-1206"
            textLine2="BD BDT"
          />
        </Col>
        <Col xs={12} lg={3} className="contact__info">
          <ContactInfoBox icon={ContactInfoIcon2} textLine1="+880-1620665499" />
        </Col>
        <Col xs={12} lg={3} className="contact__info">
          <ContactInfoBox
            icon={ContactInfoIcon3}
            textLine1="nahid.muradabir@gmail.com"
            textLine2=""
          />
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactInfo;
