import React from "react";
import { technologies } from "../services/services";
import "./Blog.css";

// Define a functional component
export default function Blogs() {
  // Array of technology objects

  return (
    <div>
      <div>
        <h1 className="blogContainer"></h1>
      </div>

      <div style={{ paddingTop: "30px" }}>
        <div>
          <u>
            <h2 className="blogHeader">We are Intoducing Our Technologies</h2>
          </u>
        </div>

        <div style={{ marginTop: "60px" }}>
          {technologies.map((tech, index) => (
            <div key={index}>
              <div
                className="container mt-3 box-shadow"
                style={tech.className1}
              >
                <div className="row justify-content-center">
                  <div
                    className={`${tech.className} col-md-8 d-flex text-black p-3 align-items-center slide-in-right technology`}
                  >
                    <div>
                      <img
                        src={tech.imageUrl}
                        className="imgstyles img-fluid"
                      />
                    </div>
                    <div className="pl-4">
                      <h4 style={{ fontSize: "40px" }}>{tech.title}</h4>
                      <span>{tech.description}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
