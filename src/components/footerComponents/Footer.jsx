import React from "react";
import "../body/article.css";
import "../body/section.css";
import "../header/Header.css";
import "./footer.css";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-light py-4 w-100">
      <div className="container">
        <div className="row">
          {/* <!-- About Company --> */}
          <div className="col-md-3 col-sm-6 footer-col">
            <h5
              className="project-name"
              style={{
                color: "rgb(60,56,56)",
                fontFamily: "Georgia, Times New Roman, Times, serif",
              }}
            >
              Company
            </h5>
            <p className="reuseClass">
              TRISHOKA <br /> Digital Services
            </p>
          </div>

          {/* <!-- Services Section --> */}
          <div
            className="col-md-3 col-sm-6 footer-col"
            style={{ lineHeight: "2rem" }}
          >
            <h5
              className="project-name"
              style={{
                color: "rgb(60,56,56)",
                fontFamily: "Georgia, Times New Roman, Times, serif",
              }}
            >
              Our Services
            </h5>
            <span className="reuseClass">Web Development</span>
            <br />
            <span className="reuseClass">Mobile App Development</span>
            <br />
            <span className="reuseClass">Digital Marketing</span>
          </div>

          {/* <!-- Contact Details --> */}
          <div className="col-md-3 col-sm-6 footer-col">
            <h5
              className="project-name"
              style={{
                color: "rgb(60,56,56)",
                fontFamily: "Georgia, Times New Roman, Times, serif",
              }}
            >
              Contact Us
            </h5>
            <ul className="list-unstyled">
              <li className="reuseClass">
                <strong className="reuseClass">Email:</strong>
                trishokadigiservices@gmail.com
              </li>
              <li className="reuseClass">
                <strong className="reuseClass">Phone:</strong>
                +91 95505 90693
              </li>
            </ul>
          </div>

          {/* <!-- Address --> */}
          <div className="col-md-3 col-sm-6 footer-col">
            <h5
              className="project-name"
              style={{
                color: "rgb(60,56,56)",
                fontFamily: "Georgia, Times New Roman, Times, serif",
              }}
            >
              Address
            </h5>
            <address className="reuseClass">
              Off. No: 1014, 10th Floor, Prajay Princeton Towers,
              <br />
              Saroornagar, L.B. Nagar, Hyderabad - 500074
            </address>
          </div>
        </div>
        <div style={{ background: "bisque" }}>
          <p className="contentright">
            © {currentYear} TRISHOKA. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
