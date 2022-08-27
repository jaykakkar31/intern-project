import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// //////// EDUCATORS DATA /////////////

export const educators = [
  {
    id: 1,
    picture:
      "https://pbs.twimg.com/profile_images/1166471091663122433/5ULjGFJS.jpg",

    educator: "Robert",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor ",
    subject: "Physics",
    experience: "3 years experience",
    rating: "95%",
  },
  {
    id: 2,
    picture:
      "https://pbs.twimg.com/profile_images/1166471091663122433/5ULjGFJS.jpg",

    educator: "Robert",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor ",
    subject: "Physics",
    experience: "3 years experience",
    rating: "95%",
  },
  {
    id: 3,
    picture:
      "https://pbs.twimg.com/profile_images/1166471091663122433/5ULjGFJS.jpg",

    educator: "Robert",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor ",
    subject: "Physics",
    experience: "3 years experience",
    rating: "95%",
  },
  {
    id: 4,
    picture:
      "https://pbs.twimg.com/profile_images/1166471091663122433/5ULjGFJS.jpg",

    educator: "Robert",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor ",
    subject: "Physics",
    experience: "3 years experience",
    rating: "95%",
  },
  {
    id: 5,
    picture:
      "https://pbs.twimg.com/profile_images/1166471091663122433/5ULjGFJS.jpg",

    educator: "Robert",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor ",
    subject: "Physics",
    experience: "3 years experience",
    rating: "95%",
  },
  {
    id: 6,
    picture:
      "https://pbs.twimg.com/profile_images/1166471091663122433/5ULjGFJS.jpg",

    educator: "Robert",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor ",
    subject: "Physics",
    experience: "3 years experience",
    rating: "95%",
  },
];

const Educator = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 2000, min: 1000 },
      items: 1,
      partialVisibilityGutter: 370,
    },
  };
  return (
    <div className="educator_section">
      <h2>Your best Educators for the best preparation</h2>
      <p>Lorem ipsum Lorem ipsum Lorem ipsum</p>
      <div className="educators">
        <Carousel
          responsive={responsive}
          arrows={true}
          renderButtonGroupOutside={true}
          partialVisible
        >
          {educators.map((educator) => (
            <div className="ed">
              <img className="ed-img" src={educator.picture} />
              <div className="information">
                <h3 className="ed-name">{educator.educator}</h3>
                <div className="ed-about">{educator.about}</div>
                <div className="ed-info">
                  <p className="ed-subject">
                    {educator.subject}
                    <p>{educator.experience}</p>
                  </p>
                  <p className="ed-rating">{educator.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Educator;
