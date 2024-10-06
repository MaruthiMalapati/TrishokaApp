import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./NumberWidget.scss"; // Custom styles if needed

const HappyClients = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="container my-5">
      <div className="row text-center">
        {/* First Box */}
        <div className="col-md-4">
          <div
            className="p-3 stat-box"
            style={{ backgroundColor: "#7e2b26", color: "white" }}
          >
            <div className="icon mb-2">
              <span role="img" aria-label="star" style={{ fontSize: "50px" }}>
                ⭐
              </span>
            </div>
            <h2>{inView && <CountUp start={0} end={97} duration={2} />}%</h2>
            <p>Of our clients recommend us</p>
          </div>
        </div>

        {/* Second Box */}
        <div className="col-md-4">
          <div
            className="p-3 stat-box"
            style={{ backgroundColor: "#196f3d", color: "white" }}
          >
            <div className="icon mb-2">
              <span role="img" aria-label="people" style={{ fontSize: "50px" }}>
                👥
              </span>
            </div>
            <h2>
              {inView && (
                <CountUp start={0} end={10000} duration={3} separator="," />
              )}
              +
            </h2>
            <p>Customers we have served</p>
          </div>
        </div>

        {/* Third Box */}
        <div className="col-md-4">
          <div
            className="p-3 stat-box"
            style={{ backgroundColor: "#123e71", color: "white" }}
          >
            <div className="icon mb-2">
              <span
                role="img"
                aria-label="diamond"
                style={{ fontSize: "50px" }}
              >
                💎
              </span>
            </div>
            <h2>{inView && <CountUp start={0} end={30} duration={3} />}+</h2>
            <p>Years of meeting client needs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyClients;
