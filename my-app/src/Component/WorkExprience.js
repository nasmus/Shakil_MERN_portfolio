import React from "react";
import "../CSS/WorkExprience.css";
import Badge from "react-bootstrap/Badge";
import work_logo from "../image/work_logo.png";

function WorkExprience() {
  return (
    <div className="WorkExprience">
      <div style={{ paddingLeft: "30px" }} data-aos="fade-down">
        <div className="work__logo">
          <img src={work_logo} alt="work_logo" />
          <h1
            style={{
              paddingBottom: "40px",
              paddingTop: "7px",
              color: "#002D40",
            }}
          >
            Work
          </h1>
        </div>
        <div className="WorkExprience__contant">
          <div className="WorkExprience_contant__title">
            <h2 style={{ color: "rgb(0, 45, 64)" }}>MoneybagGo</h2>
            <h4>JAN2023 - PRESENT</h4>
          </div>
          <div
            className="WorkExprience_contant__background"
            style={{ color: "rgb(0, 45, 64)" }}
          >
            <ul>
              <li>
                <p>
                  Design & Building a micro niche multivendor ecommerce website
                  using ( MERN stack )
                </p>
              </li>
            </ul>
            <ul>
              <li>
                <p>developing this website as a solo developer</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="WorkExprience__contant">
          <div className="WorkExprience_contant__title">
            <h2 style={{ color: "rgb(0, 45, 64)" }}>Idea Tech</h2>
            <h4>DEC2020 - SEP2020</h4>
            <Badge style={{ color: "green" }} bg="success">
              Freelance
            </Badge>
          </div>
          <div
            className="WorkExprience_contant__background"
            style={{ color: "rgb(0, 45, 64)" }}
          >
            <ul>
              <li>
                <p>
                  Develope backend functionality for existing laravel website .
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="WorkExprience__contant">
          <div className="WorkExprience_contant__title">
            <h2 style={{ color: "rgb(0, 45, 64)" }}>HelmetTips</h2>
            <h4>FEB2021 - JUN2023</h4>
          </div>
          <div
            className="WorkExprience_contant__background"
            style={{ color: "rgb(0, 45, 64)" }}
          >
            <ul>
              <li>
                <p>
                  I was develope this website in wordpress for affiliate
                  marketing.
                </p>
              </li>
            </ul>
            <ul>
              <li>
                <p>It was successfully run from 2021 April - 2023 january</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExprience;
