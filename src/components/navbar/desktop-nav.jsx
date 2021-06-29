import React from "react";
import { Link } from "react-scroll";
import { BsCloudDownload } from "react-icons/bs";
// SCSS
import "./navbar.scss";
// Assets
import LogoImg from "../../assets/navbar/logoblack.svg";
import MobileMenuIcon from "../../assets/navbar/mobile-menu.svg";
import mypdf from "../../assets/Full_Stack_Nahid_Murad_Abir.pdf";

const desktopNav = (props) => (
  <nav className={`Navbar ${!props.userIsScrolled ? "extraLargeNavbar" : ""}`}>
    <div className="wrapper flex-s-between">
      <div>
        <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
          <img src={LogoImg} alt="logo" className="img-fluid pointer" />
        </Link>
      </div>
      <div className="mobile__menu" onClick={props.mobileMenuOpen}>
        <img src={MobileMenuIcon} alt="menu" />
      </div>
      <div className="desktop__menu">
        <ul className="flex-s-between">
          <li>
            <Link
              activeClass="active-link"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              WORK
            </Link>
          </li>
          <li>
            <Link
              activeClass="active-link"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              activeClass="active-link"
              to="blog"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              BLOG
            </Link>
          </li>
          <li>
            <Link
              activeClass="active-link"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
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
  </nav>
);

export default desktopNav;
