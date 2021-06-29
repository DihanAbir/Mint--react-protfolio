import React from "react";
// SCSS
import "./blog.scss";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Assets
import Preview01 from "../../assets/blog/contextapi.jpeg";
import Preview02 from "../../assets/blog/react.png";
import Preview03 from "../../assets/blog/authintication.png";
import Preview04 from "../../assets/blog/JavaScript.jpg";

// Components
import Title from "../ui-components/title/title";
import BlogBox from "./blogBox";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

class Blog extends React.Component {
  state = {
    // LIST ARRAY OF BLOG STORIES
    stories: [
      {
        image: Preview01,
        id: "1",
        title: "Authintication",
        description:
          " Authentication is the process of recognizing a user’s identity...",
        date: "21 April 2020",
        link: "https://nahid-muradabir.medium.com/how-to-use-firebase-to-authenticate-the-user-using-g-mail-in-react-js-a688695a35cd",
      },
      {
        image: Preview02,
        id: "2",
        title: "Introduction With React",
        description: "Introduction With React",
        date: "27 April 2020",
        link: "https://nahid-muradabir.medium.com/how-to-use-firebase-to-authenticate-the-user-using-g-mail-in-react-js-a688695a35cd",
      },
      {
        image: Preview03,
        id: "3",
        title: "How to integrate Authentication with firebase",
        description: "How to integrate Authentication with firebase",
        date: "03 May 2020",
        link: "https://nahid-muradabir.medium.com/how-to-use-firebase-to-authenticate-the-user-using-g-mail-in-react-js-a688695a35cd",
      },
      {
        image: Preview04,
        id: "4",
        title: "Introduction With JavaScript",
        description: "",
        date: "15 May 2020",
        link: "https://nahid-muradabir.medium.com/start-a-new-journey-with-javascript-7a4e28761d46",
      },
    ],
  };

  render() {
    // BLOG STORIES RENDER
    let storiesRender = null;
    if (this.state.stories) {
      storiesRender = this.state.stories.map((story) => (
        <a style={{ color: "black" }} target="_blank" href={`${story.link}`}>
          <div key={story.id}>
            <BlogBox article={story} />
          </div>
        </a>
      ));
    }
    // OPTIONS FOR BLOG SLIDER
    const params = {
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    };

    return (
      <div className="blog">
        <div className="wrapper">
          <Title title="OUR BLOG." />

          <div className="padding30">
            <Carousel responsive={responsive}>{storiesRender}</Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
