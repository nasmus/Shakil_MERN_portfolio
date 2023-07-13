import React, { useEffect, useState, useContext } from "react";
import "../CSS/LeftComponent.css";
import ContactUS from "./ImageContainer/ContactUS";
import Skills from "./ImageContainer/Skills";
import Man from "./ImageContainer/Man";
import Degree from "./ImageContainer/Degree";
import { Store } from "../Store";
import PersonalProject from "./ImageContainer/PersonalProject";
import Achievement from "./ImageContainer/Achievement";
import Work from "./ImageContainer/Work";

function LeftComponent() {
  const { dispatch: ctxDispatch } = useContext(Store);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [education, setEducation] = useState(false);
  const [nameScreen, setNameScreen] = useState(false);
  const [skills, setSkills] = useState(false);
  const [workExprience, setWorkExprience] = useState(false);
  const [personalProject, setPersonalProject] = useState(false);
  const [achievement, setAchievement] = useState(false);
  const [contact, setContact] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [uiColor, setUiColor] = useState(null);
  useEffect(() => {
    if (scrollPosition < 268) {
      setUiColor("#cc0052");
      setNameScreen(true);
    } else {
      setNameScreen(false);
    }
    if (scrollPosition >= 269 && scrollPosition <= 590) {
      setUiColor("#729974");
      setEducation(true);
    } else {
      setEducation(false);
    }
    if (scrollPosition >= 591 && scrollPosition <= 1258) {
      setUiColor("#3E4967");
      setSkills(true);
    } else {
      setSkills(false);
    }
    if (scrollPosition >= 1259 && scrollPosition <= 1931) {
      setUiColor("#002D40");
      setWorkExprience(true);
    } else {
      setWorkExprience(false);
    }
    if (scrollPosition >= 1932 && scrollPosition <= 2730) {
      setUiColor("#8E2C5D");
      setPersonalProject(true);
    } else {
      setPersonalProject(false);
    }
    if (scrollPosition >= 2731 && scrollPosition <= 3352) {
      setUiColor("#005c99");
      setAchievement(true);
    } else {
      setAchievement(false);
    }
    if (scrollPosition >= 3353) {
      setUiColor("#258e8e");
      setContact(true);
    } else {
      setContact(false);
    }
    ctxDispatch({ type: "DATA_SEND", payload: scrollPosition });
  }, [ctxDispatch, scrollPosition]);

  return (
    <div>
      <div style={{ backgroundColor: `${uiColor}` }} className="Left_component">
        <div className="road-animation">
          {nameScreen ? <Man /> : ""}
          {skills ? <Skills /> : ""}
          {education ? <Degree /> : ""}
          {workExprience ? <Work /> : ""}
          {personalProject ? <PersonalProject /> : ""}
          {achievement ? <Achievement name="shakil" /> : ""}
          {contact ? <ContactUS /> : ""}
        </div>
      </div>
    </div>
  );
}

export default LeftComponent;
