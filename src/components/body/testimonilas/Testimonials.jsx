import React from "react";
import "../article.css";
import "../section.css";

const Testimonials = () => {
  return (
    <div className="testimonial">
      <div className="article">
        {/* Add your testimonials here */}
        <div className="testimonialcard">
          <article className="information">
            <span className="tag">Testimonial</span>
            <h2 className="title">
              &nbsp;&nbsp;&nbsp;&nbsp;"Amazing Service and Support!"
            </h2>
            <p className="info">
              "TRISHOKA has transformed our digital presence, and their team has
              been incredibly responsive to all our needs."
            </p>
            <a href="Blog.html">
              <button className="button">
                <span style={{ color: "black" }}>Read More</span>
              </button>
            </a>
          </article>
        </div>
        <div className="testimonialcard">
          <article className="plan">
            <div className="inner">
              <h2 className="title">Client: SriSvsPearls</h2>
              <p className="info" style={{ color: "#0f1113" }}>
                "Our business grew by 30% after implementing TRISHOKA's
                strategies. Highly recommended!"
              </p>
              <ul className="features">
                <li>
                  <span>
                    <strong>Dedicated Support</strong>
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Custom Solutions</strong>
                  </span>
                </li>
              </ul>
              <a href="contact.html">
                <button
                  className="button"
                  style={{ backgroundColor: "#d4a87e" }}
                >
                  Our Clients
                </button>
              </a>
            </div>
          </article>
        </div>
        <div className="testimonialcard">
          <article className="information">
            <h2 className="title">"Best Investment for Our Growth"</h2>
            <p className="info">
              "Partnering with TRISHOKA was the best decision we made. Their
              expertise in digital marketing is unmatched."
            </p>
            <dl className="plan">
              <dt className="heading">- Happy Client</dt>
            </dl>
            <a href="Blog.html">
              <button className="button">
                <span style={{ color: "black" }}>Read More</span>
              </button>
            </a>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
