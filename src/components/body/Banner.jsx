import React from "react";
import banner from "../../assets/images/banner.png";
import "./section.css";
const Banner = () => {
  return (
    <div className="image-caption">
      <img
        src={banner}
        alt="Nature"
        className="responsive"
        width="100%"
        height="650px"
      />
      <div className="carousel-caption d-block d-md-block">
        <p>Transform your online presence with </p>
        <h1>Cutting-Edge Digital Marketing & IT services</h1>
        <h5>!!We Create Unique and Efficient Digital Service</h5>
        <h1>
          <a
            href="contact.html"
            className="btn"
            style={{ backgroundColor: "rgb(77, 156, 187)", color: "white" }}
          >
            Learn More
          </a>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
