import React from "react";
import { Link } from "react-scroll";
import { BsCloudDownload } from "react-icons/bs";

import mypdf from "../../assets/Full_Stack_Nahid_Murad_Abir.pdf";
// SCSS
import "./navbar.scss";
// Assets
import CloseIcons from "../../assets/navbar/mobile-close.svg";
import Logo from "../../assets/navbar/logo-yellow.svg";

const mobileNav = (props) => (
  <div className={`mobile__navbar ${props.isOpen ? "mobile__open" : ""}`}>
    <div className="mobile__navbar-close" onClick={props.closeMobileMenu}>
      <img src={CloseIcons} alt="close" />
    </div>
    <div className="mobile__navbar-logo flex-center">
      <Link
        to="hero"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        onClick={props.closeMobileMenu}
      >
        <img style={{ color: "white" }} src={Logo} alt="logo" />
      </Link>
    </div>
    <div className="mobile__navbar-menu">
      <ul>
        <li className="flex-center">
          <Link
            activeClass="active-link"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={props.closeMobileMenu}
          >
            WORK
          </Link>
        </li>
        <li className="flex-center">
          <Link
            activeClass="active-link"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={props.closeMobileMenu}
          >
            ABOUT
          </Link>
        </li>
        <li className="flex-center">
          <Link
            activeClass="active-link"
            to="blog"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={props.closeMobileMenu}
          >
            BLOG
          </Link>
        </li>
        <li className="flex-center">
          <Link
            activeClass="active-link"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={props.closeMobileMenu}
          >
            CONTACT
          </Link>
        </li>
        <li>
          <button className="cvbtn btn cv">
            <a href={mypdf} download="MD Nahid Murad Abir cv.pdf">
              CV <BsCloudDownload />
            </a>
          </button>
        </li>
      </ul>
    </div>
  </div>
);

export default mobileNav;
