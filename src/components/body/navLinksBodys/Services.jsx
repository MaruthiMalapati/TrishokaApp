import React from "react";
import styles from "./Services.module.scss";
import { servicesNavData } from "../services/services";

const Services = () => {
  console.log(servicesNavData, "kl");
  return (
    <div className={`${styles.contentWrapper} ${styles.clearfix}`}>
      <section id="services">
        <div className={styles.serviceCards}>
          <div className={styles.card}>
            <div className={styles.serviceHeading} align="center">
              <br />

              <div>
                <u style={{ color: "#B87333" }}>
                  <h1
                    className={styles.serviceheading}
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', Times, serif",
                    }}
                  >
                    Welcome To Our Services
                  </h1>
                </u>
                <h6
                  style={{
                    paddingTop: "20px",
                    fontFamily: "Georgia, 'Times New Roman', Times, serif",
                  }}
                >
                  Discover Tailored Solutions to Elevate Your Success
                </h6>
                <br />
                <p
                  style={{
                    fontSize: "large",
                    fontWeight: "200",
                    color: "black",
                    fontFamily: "Georgia, 'Times New Roman', Times, serif",
                  }}
                >
                  You can Explore the best Digital & Marketing Portfolio
                  Services with TRISHOKA
                </p>
                <br />
              </div>

              <div
                className={`${styles.dInlineflex}  flex-row flex-wrap justify-content-center mb-3`}
              >
                <br />
                {/* <!-- Service Content Container --> */}
                <section id="service-content">
                  <div id="services">
                    {servicesNavData.map((serv, ind) => {
                      return (
                        <div
                          className={`${styles.servicecard} ${styles.serviceIndividual}`}
                        >
                          <div className={styles.grid}>
                            <div
                              className={styles.gCol6}
                              style={{ margin: "0px 5px" }}
                            >
                              <h1
                                align="center"
                                style={{ color: serv.color, marginTop: "15%" }}
                              >
                                {serv.title}
                              </h1>
                              <h4 align="center">{serv.description}</h4>
                              <p align="center">{serv.description1}</p>
                              <br />
                              <h2
                                align="center"
                                style={{
                                  color: serv.color1,
                                  marginLeft: "-60px",
                                }}
                              >
                                Offerings:
                              </h2>
                              <ul
                                style={{
                                  marginLeft: "26%",
                                  lineHeight: "2rem",
                                }}
                              >
                                {serv.offerings.map((offer, index) => {
                                  return (
                                    <li
                                      key={index}
                                      style={{ textAlign: "left" }}
                                    >
                                      &#10148;<b>{offer}</b>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                            <div className={styles.gCol6}>
                              <img
                                src={serv.imageSrc}
                                alt={serv.imgalt}
                                height="80%"
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Services;
