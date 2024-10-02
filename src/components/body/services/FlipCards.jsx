import React from "react";
import "../section.css";
import "../article.css";

export default function FlipCards(props) {
  return (
    <div class="flipcard-container" key={props.index}>
      <div class="flipcard">
        <div class="flipcard-inner">
          <div class="flipcard-front">
            <br />
            <img
              src={props.service.image}
              width="80px"
              alt={props.service.title}
            />
            <h2>{props.service.title}</h2>
            <p>{props.service.description}</p>
          </div>
          <div class="flipcard-back">
            <br />
            <br />
            {/* <!-- <p>Maximize your reach with our marketing services.</p> --> */}
            <ul>
              {props.service.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
            <a href="services.html">
              <button className="btn btn-primary">Learn More</button>
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
