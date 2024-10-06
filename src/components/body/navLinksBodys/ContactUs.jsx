import React, { useEffect } from "react";
import styles from "./ContactUs.module.scss";
import svsLogo from "../../../assets/partnershipImages/svslogo.jpg";
import teamsLogo from "../../../assets/partnershipImages/team9logo.jpg";
import bhonchesaraLogo from "../../../assets/partnershipImages/bhonchesara.webp";
import ContactUsForm from "../../forms/ContactUsForm";

const ContactUs = () => {
  useEffect(() => {
    // Show cards with delay
    const showCards = () => {
      setTimeout(() => {
        document.getElementById("card1").style.opacity = "1";
        document.getElementById("card1").style.transform = "translateY(0)";
      }, 500);

      setTimeout(() => {
        document.getElementById("card2").style.opacity = "1";
        document.getElementById("card2").style.transform = "translateY(0)";
      }, 1000);

      setTimeout(() => {
        document.getElementById("card3").style.opacity = "1";
        document.getElementById("card3").style.transform = "translateY(0)";
      }, 1500);
    };

    showCards();
  }, []);

  return (
    <div>
      <div>
        <h1 className={styles.helpSection}>
          How can we help you?
          <button
            className={styles.contactButton}
            data-bs-toggle="modal"
            data-bs-target="#contactModal"
          >
            Contact Us
          </button>
        </h1>
        {/* model  */}
        <div
          className="modal fade"
          id="contactModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="contactModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <ContactUsForm />
              {/* <u>
                <h5 className="modal-title" id="contactModalLabel">
                  Reach Out Our Team
                </h5>
              </u>
              <button
                type="button"
                className={styles.closeButton}
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="number">Phone Number</label>
                    <input
                      type="number"
                      className="form-control"
                      id="number"
                      placeholder="Enter Mobile Number"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div> */}
            </div>
          </div>
        </div>
        {/* model end */}
      </div>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="container text-center d-flex flex-column align-items-center justify-content-center">
            <h1 className={styles.sectionHeader}>We Are Looking for</h1>
            <span className="text-muted px-3">
              We are happy to assist you...
            </span>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className={`d-flex flex-column align-items-center justify-content-center p-4 shadow rounded-lg ${styles.projectCard}`}
              id="card1"
            >
              <h6 className={styles.projectName}>Sri SVS Pearls & Jewellers</h6>
              <img
                className="img-fluid"
                src={svsLogo}
                alt="Sri SVS Pearls & Jewellers"
              />
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className={`d-flex flex-column align-items-center justify-content-center p-4 shadow rounded-lg ${styles.projectCard}`}
              id="card2"
            >
              <h6 className={styles.projectName}>Bhonchesara</h6>
              <img
                className="img-fluid"
                src={bhonchesaraLogo}
                alt="Bhonchesara"
              />
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className={`d-flex flex-column align-items-center justify-content-center p-4 shadow rounded-lg ${styles.projectCard}`}
              id="card3"
            >
              <h6 className={styles.projectName}>Team 9 Infra</h6>
              <img className="img-fluid" src={teamsLogo} alt="Team 9 Infra" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className={styles.locationText}>Location</h1>
        <div className={`container shadow ${styles.locationContainer}`}>
          <div className="col-md-6 img-wrapper">
            <img
              src="https://thumbs.dreamstime.com/b/famous-hyderabad-landmark-charminar-india-world-built-quli-qutb-shah-th-century-128124667.jpg"
              alt="Charminar"
              className={styles.locationImg}
            />
            <div className={styles.locationInfo}>
              <h2>TRISHOKA DIGITAL SERVICES</h2>
              <p>Off. No: 1014, 10th Floor...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
