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
        // html css
        {
          id: "1",
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
          id: "21554",
          preview: html4,
          title: "News Portal",
          tag: "HTML",
          link: "https://dreamy-engelbart-86a487.netlify.app/",
          github: "https://github.com/DihanAbir",
        },
        {
          id: "3",
          preview: html5,
          title: "NEC LAB",
          tag: "HTML",
          link: "https://admiring-ramanujan-64a0ce.netlify.app/",
          github: "https://github.com/DihanAbir",
        },
        {
          id: "4",
          preview: html6,
          title: "Social Blog",
          tag: "HTML",
          link: "https://unruffled-keller-12f62f.netlify.app/",
          github: "https://github.com/DihanAbir",
        },
        {
          id: "5",
          preview: html7,
          title: "Urban Fashion",
          tag: "HTML",
          link: "https://nifty-liskov-45be7a.netlify.app/",
          github: "https://github.com/DihanAbir",
        },
        {
          id: "6",
          preview: html8,
          title: "Stocki",
          tag: "HTML",
          link: "https://modest-swartz-52f21a.netlify.app/",
          github: "https://github.com/DihanAbir",
        },
        // html css
        // react
        {
          id: "1",
          preview: react1,
          title: "Counsulting Site",
          tag: "MERN",
          link: "https://pensive-varahamihira-61d0eb.netlify.app/",
          github: "https://dihan-abir0.netlify.app/portfolio",
        },

        {
          id: "2",
          preview:
            "https://images.unsplash.com/photo-1608291790905-5faeccf569bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          title: "Smartwatch",
          tag: "MERN",
          link: "https://dihan-abir0.netlify.app/",
        },
        {
          id: "3",
          preview:
            "https://images.unsplash.com/photo-1620953749696-38989c40eadb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          title: "Speakerphone",
          tag: "MERN",
          link: "https://dihan-abir0.netlify.app/",
        },
        {
          id: "2",
          preview:
            "https://images.unsplash.com/photo-1621009026527-960a28cf68a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          title: "Application",
          tag: "Application",
          link: "https://dihan-abir0.netlify.app/",
        },
        {
          id: "3",
          preview:
            "https://images.unsplash.com/photo-1620887149707-4c09ac37652c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60 ",
          title: "Application",
          tag: "Application",
          link: "https://dihan-abir0.netlify.app/",
        },
        {
          id: "4",
          preview:
            "https://images.unsplash.com/photo-1620887145520-fc916eea31af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          title: "Sneakers",
          tag: "MERN",
          link: "https://dihan-abir0.netlify.app/",
        },
        {
          id: "5",
          preview:
            "https://images.unsplash.com/photo-1620935432499-e478e9ffa6ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          title: "Label",
          tag: "Frontend",
          link: "https://dihan-abir0.netlify.app/",
        },
        {
          id: "6",
          preview:
            "https://images.unsplash.com/photo-1620957335851-2dcb14344faf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          title: "lemons",
          tag: "Frontend",
          link: "https://dihan-abir0.netlify.app/",
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
          />
        ) : (
          <ProjectBox
            preview={project.preview}
            key={project.id}
            title={project.title}
            tag={project.tag}
            link={project.link}
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
                      this.state.pickedFilter === "MERN"
                        ? "portfolio__nav-active font12"
                        : "font12"
                    }
                    onClick={() => this.filterGallery("MERN")}
                  >
                    MERN
                  </li>
                  <li
                    className={
                      this.state.pickedFilter === "Frontend"
                        ? "portfolio__nav-active font12"
                        : "font12"
                    }
                    onClick={() => this.filterGallery("Frontend")}
                  >
                    Frontend
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
