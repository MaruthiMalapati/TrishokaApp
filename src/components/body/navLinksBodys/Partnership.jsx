import React from "react";
import { globalServiceData } from "../services/services";
import "./partnerShip.css";
export default function Partnership() {
  const text = "Our Partnerships";
  return (
    <div>
      <div className="partnershipContainer">
        <h1 className="wave-text">
          {text.split("").map((letter, index) => {
            if (letter === " ") {
              return <span key={index}>&nbsp;</span>;
            } else {
              return <span key={index}>{letter}</span>;
            }
          })}
        </h1>
      </div>

      <div className="container text-center" style={{ marginTop: "20px" }}>
        <h4 className="partnershipHeader bg-pink p-2">PARTNERSHIPS</h4>
        <span className="partnershipContentn d-block mt-3">
          {globalServiceData.partnershipContent}
        </span>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <div className="image-card large">
              <h6 className="text-center text-shadow fontFamily sriSvuHeader">
                Sri SVS
              </h6>
              <img src="images/svslogo.jpg" alt="Sri SVS" />
              <div className="hover-content">
                <p className="fontFamily">Sri SVS</p>
                <p style={{ color: "#B87333" }}>
                  Sri SVS Project Describes the Jewellers
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image-card large">
              <h6 className="text-center text-shadow sriSvuHeader">
                BHONCHESARA
              </h6>
              <img src="images/bhonchesara.webp" alt="BHONCHESARA" />
              <div className="hover-content">
                <p>BHONCHESARA</p>
                <p style={{ color: "#B87333" }}>
                  Bhonchesara Project Describes the Social Media Marketing
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image-card large">
              <h6 className="text-center text-shadow sriSvuHeader">
                Team 9 Infra
              </h6>
              <img src="images/team9logo.jpg" alt="Team 9 Infra" />
              <div className="hover-content">
                <p>Team 9 Infra</p>
                <p style={{ color: "#B87333" }}>
                  Team 9 Infra Project Describes the Real Estate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
