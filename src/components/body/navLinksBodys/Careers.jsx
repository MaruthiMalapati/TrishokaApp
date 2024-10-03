import React, { useEffect, useState } from "react";
import styles from "./Careers.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { jobs, reviews } from "../services/services";

const Careers = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Set visibility after 1 second
    }, 1000);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);
  return (
    <div>
      <header className={styles.header}>
        <marquee className={styles.marquee}>
          Come let's build Something of great Value
        </marquee>
      </header>

      <section className="text-center">
        <h2 className={styles.sectionTitle}>CAREERES</h2>
      </section>

      <div className="container">
        {/* Digital Marketing Card */}
        {jobs.map((job, index) => {
          return (
            <div>
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ minHeight: "70vh" }}
              >
                <div
                  className={`card p-3 ${styles.animatedCard}  ${
                    isVisible ? styles.visible : ""
                  }`}
                  style={{ width: "100%", maxWidth: "800px" }}
                >
                  <h4
                    className="mb-2"
                    style={{ fontFamily: "Georgia, Times, serif" }}
                  >
                    {job.title}
                  </h4>
                  <div
                    className="d-flex flex-wrap mb-2"
                    style={{ gap: "20px" }}
                  >
                    <p className={styles.tag}>{job.experience}</p>
                    <p className={styles.tag}>{job.availability}</p>
                    <p className={styles.tag}>{job.location}</p>
                  </div>
                  <hr />
                  <h4 className="mb-3">Minimum Qualification</h4>
                  <ul>
                    {job.qualifications.map((qual, index) => (
                      <li key={index}>{qual}</li>
                    ))}
                  </ul>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-primary btn-sm">
                      Show More
                    </button>
                    <button
                      className={`btn btn-sm ${styles.applyButton}`}
                      data-bs-toggle="modal"
                      data-bs-target="#applyModal"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      <ApplyModal />

      {/* Reviews */}
      <section className="container text-center my-4">
        <h2 className={styles.reviewsTitle}>
          What People are Saying About Us!
        </h2>
        <div className="row justify-content-center">
          {reviews.map((review, index) => {
            return (
              <div className="col-12 col-md-6 mb-4">
                <div className={`${styles.reviewCard} p-3 border rounded`}>
                  <h5 className={styles.reviewAuthor}>{review.author}</h5>
                  <p className={styles.reviewText}>{review.text}</p>
                  <div className={styles.stars}>
                    {[...Array(review.stars)].map((_, i) => (
                      <i key={i} className="fas fa-star checked"></i>
                    ))}
                    {[...Array(5 - review.stars)].map((_, i) => (
                      <i key={i} className="far fa-star"></i>
                    ))}
                  </div>
                  <span className="text-muted">{`Posted on ${review.postedOn}`}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

// Apply Modal Component
const ApplyModal = () => (
  <div
    className="modal fade"
    id="applyModal"
    tabIndex="-1"
    aria-labelledby="applyModalLabel"
    aria-hidden="true"
    style={{ marginTop: "100px" }}
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label
                htmlFor="name"
                className="form-label"
                style={{ color: "black" }}
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-control"
                id="name"
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="form-label"
                style={{ color: "black" }}
              >
                Email address
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control"
                id="email"
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="phoneNumber"
                className="form-label"
                style={{ color: "black" }}
              >
                Mobile Number
              </label>
              <input
                type="number"
                placeholder="Enter Mobile Number"
                className="form-control"
                id="number"
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="resume"
                className="form-label"
                style={{ color: "black" }}
              >
                Upload Resume
              </label>
              <input
                type="file"
                placeholder="Upload Resume"
                className="form-control"
                id="resume"
                required
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn"
            data-bs-dismiss="modal"
            style={{ backgroundColor: "rgb(90, 178, 213)", color: "white" }}
          >
            Close
          </button>
          <button
            type="submit"
            className="btn"
            style={{ backgroundColor: "rgb(90, 178, 213)", color: "white" }}
          >
            Submit Application
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Careers;
