import React from "react";
import "../CSS/SkillComponent.css";

function SkillsComponent() {
  const techStack = ["React.js", "Express JS", "Redux", "Node.js"];
  const languages = ["React.js", "Express JS", "Redux", "Node.js"];
  const backendStack = ["React.js", "Express JS", "Redux", "Node.js"];
  return (
    <div>
      <div className="Right_component__skills">
        <div style={{ paddingLeft: "30px" }} data-aos="fade-up">
          <h1>Skills</h1>
          <div className="Right_component_skills__component">
            <div className="Right_component_skills__Left">
              <ul style={{ paddingBottom: "20px" }}>
                <h3>
                  <li>FreamWork</li>
                </h3>
                <ul>
                  {techStack.map((item, index) => (
                    <li key={index + "li"}>
                      <h4>{item}</h4>
                    </li>
                  ))}
                </ul>
              </ul>

              <ul>
                <h3>
                  <li>Language</li>
                </h3>
                <ul>
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

              <ul>
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
