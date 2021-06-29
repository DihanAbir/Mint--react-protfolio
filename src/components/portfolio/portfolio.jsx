import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
//Scss
import "./portfolio.scss";
//Assets
import Arrow from "../../assets/portfolio/arrow.svg";
import html1 from "../../assets/portfolio/html/Christy.png";
import html2 from "../../assets/portfolio/html/consultency.PNG";
import html3 from "../../assets/portfolio/html/Elavuation.PNG";
import html4 from "../../assets/portfolio/html/newsite.PNG";
import html5 from "../../assets/portfolio/html/Screenshot_1.png";
import html6 from "../../assets/portfolio/html/socialblog.PNG";
import html7 from "../../assets/portfolio/html/urban.PNG";
import html8 from "../../assets/portfolio/html/Stocki.PNG";

// react
import react1 from "../../assets/portfolio/react/consulting.PNG";
import react2 from "../../assets/portfolio/react/aircncPNG.PNG";
import react3 from "../../assets/portfolio/react/coursesite.PNG";
import react4 from "../../assets/portfolio/react/emajnPNG.PNG";
import react5 from "../../assets/portfolio/react/resturant mernPNG.PNG";
import react6 from "../../assets/portfolio/react/athena.PNG";

// portfolio.
import portfolio1 from "../../assets/portfolio/portfolio/2nd.PNG";
import portfolio2 from "../../assets/portfolio/portfolio/3rd.png";
import portfolio3 from "../../assets/portfolio/portfolio/reactp.png";

// e-commerce
// import ecom1 from "../../assets/portfolio/e-commerce/";
// import ecom2 from "../../assets/portfolio/e-commerce/";

// nextjs
import next1 from "../../assets/portfolio/nextjs/concert.PNG";

// Nodejs
import node1 from "../../assets/portfolio/node/bootcamp.PNG";
import node2 from "../../assets/portfolio/node/noteapp.PNG";
import node3 from "../../assets/portfolio/node/taskmanager.PNG";

//Components
import Button from "../ui-components/button/button";
import Title from "../ui-components/title/title";
import ProjectBox from "../ui-components/projectBox/projectBox";
import ProjectBoxList from "../ui-components/projectBox/projectBoxList";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: "list",
      // PORTFOLIO PROJECTS
      projects: [
        // portfolio
        {
          id: "71",
          preview: portfolio2,
          title: "portfolio1",
          tag: "portfolio",
          link: "",
          github: "https://github.com/DihanAbir/Mint--react-protfolio",
        },
        {
          id: "72",
          preview: portfolio3,
          title: "portfolio3",
          tag: "portfolio",
          link: "https://gallant-jepsen-11dcf0.netlify.app/",
          github: "https://github.com/saikat1095/React_Portfolio",
        },
        {
          id: "73",
          preview: portfolio1,
          title: "portfolio2",
          tag: "portfolio",
          link: "https://dihan-abir0.netlify.app/",
          github: "https://github.com/DihanAbir",
        },

        // next
        {
          id: "31",
          preview: next1,
          title: "Concert Evenet",
          tag: "NextJS",
          link: "",
          github: "https://github.com/DihanAbir/Music-Event_NextJS",
        },

        // node
        {
          id: "41",
          preview: node2,
          title: "Note app",
          tag: "Node",
          link: "",
          github: "https://github.com/DihanAbir/notepad",
        },
        {
          id: "42",
          preview: node1,
          title: "Bootcamp",
          tag: "Node",
          link: "",
          github: "https://github.com/DihanAbir/Bootcamp",
        },
        {
          id: "43",
          preview: node3,
          title: "Task Manager",
          tag: "Node",
          link: "",
          github: "https://github.com/DihanAbir/Note--MERN",
        },
        // html css
        {
          id: "31",
          preview: html1,
          title: "E-commerce Frontend",
          tag: "HTML",
          link: "https://vigorous-allen-9f12ab.netlify.app/",
          github: "https://github.com/DihanAbir",
        },
        {
          id: "2",
          preview: html2,
          title: "Counsel",
          tag: "HTML",
          link: "https://lucid-gates-e76ace.netlify.app/",
          github: "https://github.com/DihanAbir",
        },
        {
          id: "3",
          preview: html3,
          title: "Elevation",
          tag: "HTML",
          link: "https://happy-swirles-6a57f2.netlify.app/",
          github: "https://github.com/DihanAbir",
        },
        {
          id: "4",
          preview: html4,
          title: "News Portal",
          tag: "HTML",
          link: "https://dreamy-engelbart-86a487.netlify.app/",
          github: "https://github.com/DihanAbir",
        },
        {
          id: "5",
          preview: html5,
          title: "NEC LAB",
          tag: "HTML",
          link: "https://admiring-ramanujan-64a0ce.netlify.app/",
          github: "https://github.com/DihanAbir",
        },
        {
          id: "6",
          preview: html6,
          title: "Social Blog",
          tag: "HTML",
          link: "https://unruffled-keller-12f62f.netlify.app/",
          github: "https://github.com/DihanAbir",
        },
        {
          id: "7",
          preview: html7,
          title: "Urban Fashion",
          tag: "HTML",
          link: "https://nifty-liskov-45be7a.netlify.app/",
          github: "https://github.com/DihanAbir",
        },
        {
          id: "8",
          preview: html8,
          title: "Stocki",
          tag: "HTML",
          link: "https://modest-swartz-52f21a.netlify.app/",
          github: "https://github.com/DihanAbir",
        },
        // html css
        // react
        {
          id: "9",
          preview: react1,
          title: "Counsulting Site",
          tag: "React",
          link: "https://pensive-varahamihira-61d0eb.netlify.app/",
          github: "https://dihan-abir0.netlify.app/portfolio",
          feature: "",
          technology: "",
        },

        {
          id: "19",
          preview: react4,
          title: "amajon clone",
          tag: "React",
          link: "https://emmajhonshop.netlify.app/",
          github:
            "https://github.com/DihanAbir/web_versity_project/tree/master/src",
          feature: "",
          technology: "",
        },

        {
          id: "12",
          preview: react3,
          title: "Course site",
          tag: "React",
          link: "https://happy-joliot-50ae7e.netlify.app",
          github: "https://github.com/DihanAbir/courseSite",
          feature: "",
          technology: "",
        },
        {
          id: "18",
          preview: react2,
          title: "Air CNC",
          tag: "React",
          link: "https://cranky-franklin-1ad280.netlify.app/",
          github: "https://github.com/DihanAbir/AirCnC",
          feature:
            "Users can choose Place by filtering || Google Map || Admins can see Users booking || Admin can add new services || Add to cart",
          technology: "",
        },
        {
          id: "15",
          preview: react5,
          title: "Resturant Site",
          tag: "React",
          link: "https://heuristic-northcutt-cc3ef6.netlify.app/",
          github: "https://github.com/DihanAbir/Resturant_Management_MERN",
          feature: "",
          technology: "",
        },
        {
          id: "14",
          preview: react6,
          title: "Athena Site",
          tag: "React",
          link: "https://peaceful-sammet-9b11a4.netlify.app/",
          github: "https://github.com/DihanAbir/Athena-design",
          feature:
            "Creative Agency providing services ||  Customer can place Order a service || Admin can add new services || User Role Management system (Admin and User)",
          technology: "",
        },
      ],
      // PORTFOLIO GALLERY WILL LOAD THIS AFTER FUNCTION "filterGallery" FINISH FILTERING
      filterResult: null,
      pickedFilter: "all",
      filterMenuActive: false,
      pickedFilterDropdown: "NEWEST",
    };
  }

  // FIRST LOAD
  componentDidMount() {
    this.filterGallery("all");
  }

  gridHandler(e) {
    this.setState({ layout: "grid" });
    console.log(this.state.layout);
  }
  listHandler(e) {
    this.setState({ layout: "list" });
    console.log(this.state.layout);
  }

  //FILTER PORTFOLIO FUNCTION
  filterGallery = (target) => {
    let projectsArr = [...this.state.projects];
    let result;

    if (target !== "all") {
      result = projectsArr.filter((project) => project.tag === target);
    } else {
      result = projectsArr;
    }

    this.setState({
      filterResult: result,
      pickedFilter: target,
      pickedFilterDropdown: "NEWEST",
    });
  };

  // FILTER DROP DOWN HOVER MENU FUNCTION
  filterMenuHover = (event) => {
    if (event) {
      this.setState({ filterMenuActive: true });
    } else {
      this.setState({ filterMenuActive: false });
    }
  };

  // FILTER DROP DOWN HANDLER
  filterDropDownHandler = (filter) => {
    this.setState({ pickedFilterDropdown: filter, filterMenuActive: false });

    let projectsArr = [...this.state.filterResult];
    let result;

    if (filter === "NEWEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1));
    } else if (filter === "OLDEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
    }

    this.setState({ filterResult: result });
  };

  // RENDER
  render() {
    // PORTFOLIO GALLERY RENDER
    let projectsRender = null;
    if (this.state.filterResult) {
      projectsRender = this.state.filterResult.map((project) =>
        this.state.layout === "list" ? (
          <ProjectBoxList
            preview={project.preview}
            key={project.id}
            value={project.id}
            title={project.title}
            tag={project.tag}
            link={project.link}
            github={project.github}
          />
        ) : (
          <ProjectBox
            preview={project.preview}
            key={project.id}
            title={project.title}
            tag={project.tag}
            link={project.link}
            github={project.github}
          />
        )
      );
    }
    // PORTFOLIO GALLERY BREAKPOINTS
    const portfolioBreakpoints = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1,
    };
    // PORTFOLIO FILTER DROPDOWN MENY RENDER
    let filterDroppDown = null;
    if (this.state.filterMenuActive) {
      filterDroppDown = (
        <div className="portfolio__filter-menu shadow">
          <p
            className="font12"
            onClick={() => this.filterDropDownHandler("NEWEST")}
          >
            NEWEST
          </p>
          <p
            className="font12"
            onClick={() => this.filterDropDownHandler("OLDEST")}
          >
            OLDEST
          </p>
        </div>
      );
    }

    return (
      <div id="portfolio">
        <div className="wrapper">
          <Title title="WORK SHOWCASE." />
          <Row>
            <Col xs={12} sm={12} md={8} lg={9}>
              <div className="portfolio__nav">
                <ul>
                  <li
                    className={
                      this.state.pickedFilter === "all"
                        ? "portfolio__nav-active font12"
                        : "font12"
                    }
                    onClick={() => this.filterGallery("all")}
                  >
                    ALL
                  </li>

                  <li
                    className={
                      this.state.pickedFilter === "Node"
                        ? "portfolio__nav-active font12"
                        : "font12"
                    }
                    onClick={() => this.filterGallery("Node")}
                  >
                    NODE
                  </li>
                  <li
                    className={
                      this.state.pickedFilter === "React"
                        ? "portfolio__nav-active font12"
                        : "font12"
                    }
                    onClick={() => this.filterGallery("React")}
                  >
                    React
                  </li>

                  <li
                    className={
                      this.state.pickedFilter === "NextJS"
                        ? "portfolio__nav-active font12"
                        : "font12"
                    }
                    onClick={() => this.filterGallery("NextJS")}
                  >
                    NextJS
                  </li>
                  <li
                    className={
                      this.state.pickedFilter === "Application"
                        ? "portfolio__nav-active font12"
                        : "font12"
                    }
                    onClick={() => this.filterGallery("Application")}
                  >
                    Application
                  </li>
                  <li
                    className={
                      this.state.pickedFilter === "HTML"
                        ? "portfolio__nav-active font12"
                        : "font12"
                    }
                    onClick={() => this.filterGallery("HTML")}
                  >
                    HTML
                  </li>
                  <li
                    className={
                      this.state.pickedFilter === "portfolio"
                        ? "portfolio__nav-active font12"
                        : "font12"
                    }
                    onClick={() => this.filterGallery("portfolio")}
                  >
                    PORTFOLIO
                  </li>
                </ul>
              </div>
            </Col>
            <Col
              style={{
                alignContent: "center",
                justifyContent: "center",
                display: "flex",
              }}
              xs={12}
              sm={12}
              md={4}
              lg={3}
            >
              <div className="layoutButtn">
                <button
                  className="btn-custom"
                  onClick={this.listHandler.bind(this)}
                >
                  List
                </button>
                <button
                  className="btn-custom"
                  onClick={this.gridHandler.bind(this)}
                >
                  Grid
                </button>
              </div>
              <div
                className="portfolio__filter border"
                onMouseEnter={() => this.filterMenuHover(true)}
                onMouseLeave={() => this.filterMenuHover(false)}
              >
                <p className="font12">
                  {this.state.pickedFilterDropdown} FIRST
                </p>
                <img src={Arrow} alt="arrow" />
                {filterDroppDown}
              </div>
            </Col>
          </Row>
          {this.state.layout === "list" ? (
            <Masonry
              breakpointCols={portfolioBreakpoints}
              className="row "
              columnClassName="mint__gallery2"
            >
              {projectsRender}
            </Masonry>
          ) : (
            <Masonry
              breakpointCols={portfolioBreakpoints}
              className="row "
              columnClassName="mint__gallery"
            >
              {projectsRender}
            </Masonry>
          )}

          <Row className="flex-center padding40">
            <Button label="HAVE WORK FOR US?" target={"contact"} />
          </Row>
        </div>
      </div>
    );
  }
}

export default Portfolio;
