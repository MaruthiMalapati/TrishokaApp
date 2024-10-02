import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../assets/images/trishokalogonobg.png";
export default function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid" style={{ marginBottom: "20px" }}>
          <a className="navbar-brand" href="navbar.html">
            <img src={logo} width="70px" alt="Trishoka Logo" />
          </a>
          <div class="text-center navbar-text">
            <h1 class="mb-2">TRISHOKA</h1>
            <p class="mb-0">Digital Services</p>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarTogglerDemo02"
            style={{ marginLeft: "10%" }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="navbar.html"
                  style={{ color: "whitesmoke" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="partnerships.html">
                  Partnership
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Blog.html">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="culture.html">
                  Culture
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="careers.html">
                  Careers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
