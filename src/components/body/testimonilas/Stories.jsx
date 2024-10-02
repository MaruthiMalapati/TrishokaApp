import React from "react";
import "../article.css";
import "../section.css";
import insideStorieImg from "../../../assets/cardsImages/insidecol1.jpeg";
import insideS2 from "../../../assets/cardsImages/insidecol2.jpeg";
import insideS3 from "../../../assets/cardsImages/insidecol3.jpeg";
export default function Stories() {
  return (
    <div>
      <section class="inside-stories">
        <h2>Inside stories</h2>
        <div class="stories-container">
          <div class="story story-left">
            <img src={insideStorieImg} alt="" />

            <br />
            <h3>//New career, new you</h3>
            <p>Changing careers to change your life</p>
          </div>
          <div class="story-column">
            <div class="story">
              <img src={insideS2} alt="" />
              <h3>//A forum for sustainability</h3>
              <p>Getting the sustainability message heard by world leaders</p>
            </div>
            <div class="story">
              <img src={insideS3} alt="" />
              <h3>//Driving innovation</h3>
              <p>Future-shaping projects</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
