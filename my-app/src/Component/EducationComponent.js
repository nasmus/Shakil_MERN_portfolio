import React, { useState, useEffect, useContext } from "react";
import "../CSS/EducationComponent.css";
import education from "../image/education.png";
import { Store } from "../Store";

function EducationComponent() {
  const [isActive, setIsActive] = useState(false);
  const { state } = useContext(Store);
  const { data } = state;
  useEffect(() => {
    if (data >= 591 && data <= 1358) {
      setIsActive(true);
    }
  }, [data]);
  return (
    <div>
      <div className="Education">
        <div data-aos="fade-up">
          <div className="education__logo">
            <img src={education} alt="educationLogo" />
            <h1 style={{ color: "#dadde3", }}>Education</h1>
          </div>
          {isActive ? (
            <>
              <div className="eduContainer Left-container">
                <div className="text-box1">
                  <h2>BSC</h2>
                  <small>AUG2014 - DEC2019</small>
                  <p>American International University-Bangladesh (AIUB)</p>
                  <span className="Left-container-arrow1"></span>
                </div>
              </div>
              <div className="container Right-container">
                <div className="text-box1">
                  <h2>HSC</h2>
                  <small>JUN2012 - JUN2014</small>
                  <p>Ullapara Science College. Ullapara, Sirajganj</p>
                  <span className="Right-container-arrow1"></span>
                </div>
              </div>
              <div className="container Left-container">
                <div className="text-box1">
                  <h2>SSC</h2>
                  <small>JUN2010 - JUN2012</small>
                  <p>Ullapara Merchant Pilot High School. ullapara, Sirajganj,</p>
                  <span className="Left-container-arrow1"></span>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default EducationComponent;
