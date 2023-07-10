import React from "react";
import "../CSS/SkillComponent.css";
import logo from "../image/logo.png";

function SkillsComponent() {
  const techStack = ["React.js", "Express JS", "Redux", "Node.js"];
  const backendStack = ["Context Api", "JWT Token", "MongoDb", "ES6"];
  return (
    <div>
      <div className="Right_component__skills">
        <div style={{ paddingLeft: "30px" }} data-aos="fade-up">
          <div className="skills_logo">
            <img src={logo} alt="logo" />
            <h1 style={{ color: "rgb(114, 153, 116)" }}>Skills</h1>
          </div>

          <div className="Right_component_skills__component">
            <div className="Right_component_skills__Left">
              <ul style={{ paddingBottom: "20px" }}>
                <h3>
                  <li style={{ color: "rgb(114, 153, 116)" }}>FreamWork</li>
                </h3>
                <ul style={{ color: "rgb(45 68 46)" }}>
                  {techStack.map((item, index) => (
                    <li key={index + "li"}>
                      <h4>{item}</h4>
                    </li>
                  ))}
                </ul>
              </ul>

              <ul>
                <h3>
                  <li style={{ color: "rgb(114, 153, 116)" }}>Language</li>
                </h3>
                <ul style={{ color: "rgb(45 68 46)" }}>
                  <h4>
                    <li>JavaScript</li>
                  </h4>
                  <h4>
                    <li>Python</li>
                  </h4>
                  <h4>
                    <li>HTML5</li>
                  </h4>
                  <h4>
                    <li>CSS</li>
                  </h4>
                </ul>
              </ul>
            </div>
            <div className="Right_component_skills__right">
              <ul style={{ color: "rgb(45 68 46)" }}>
                {backendStack.map((item, index) => (
                  <li key={index + "li"}>
                    <h4>{item}</h4>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsComponent;
