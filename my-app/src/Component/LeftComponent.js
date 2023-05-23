import React,{useEffect,useState,useContext} from 'react'
import '../CSS/LeftComponent.css'
import ContactUS from './ImageContainer/ContactUS';
import Skills from './ImageContainer/Skills';
import Man from './ImageContainer/Man';
import Degree from './ImageContainer/Degree';
import { Store } from '../Store';
import PersonalProject from './ImageContainer/PersonalProject';
import Achievement from './ImageContainer/Achievement';
import Work from './ImageContainer/Work';


function LeftComponent() {
  const { state, dispatch:ctxDispatch } = useContext(Store)

  const [scrollPosition, setScrollPosition] = useState(0)
  const [education, setEducation] = useState(false);
  const [nameScreen, setNameScreen] = useState(false);
  const [skills, setSkills] = useState(false);
  const [workExprience, setWorkExprience] = useState(false);
  const [personalProject, setPersonalProject] = useState(false);
  const [achievement, setAchievement] = useState(false);
  const [contact, setContact] = useState(false);
  useEffect(() => {
    const handleScroll =() => {
      setScrollPosition(window.scrollY)
    };

    window.addEventListener('scroll',handleScroll);
    return () => {
      window.removeEventListener('scroll',handleScroll)
    }
    
  },[])

  const [uiColor, setUiColor] = useState(null)
  useEffect(() => {
    if(scrollPosition <348){
      setUiColor('#cc0052');
      setNameScreen(true);
    } else {
      setNameScreen(false)
    }
    if(scrollPosition >=349 && scrollPosition <=872){
      setUiColor('#729974');
      setEducation(true);
    } else {
      setEducation(false)
    }
    if(scrollPosition >= 872 && scrollPosition <=1370){
      setUiColor('#5370c6')
      setSkills(true);
    } else {
      setSkills(false)
    }
    if(scrollPosition >= 1370 && scrollPosition <= 1830){
      setUiColor('#002D40');
      setWorkExprience(true)
    } else {
      setWorkExprience(false)
    }
    if(scrollPosition >=1830 && scrollPosition<= 2417){
      setUiColor('#ff5500');
      setPersonalProject(true)
    } else {
      setPersonalProject(false)
    }
    if(scrollPosition >= 2417 && scrollPosition <= 3085){
      setUiColor('#005c99')
      setAchievement(true);
    } else {
      setAchievement(false)
    }
    if(scrollPosition >= 3085){
      setUiColor('#258e8e')
      setContact(true);
    } else {
      setContact(false)
    }
    ctxDispatch({type:'DATA_SEND',payload:scrollPosition})
    
  },[scrollPosition])
  
  return (
    <div>
      <div style={{backgroundColor:`${uiColor}`}} className='Left_component' >
        <div className='road-animation' >
          {nameScreen ? <Man /> : ''}
          {education ? <Degree /> : ''  }
          {skills ? <Skills /> : ''}
          {workExprience ?  <Work /> : ''}
          {personalProject ? <PersonalProject /> : ''} 
          {achievement ? <Achievement name='shakil' /> : ''}
          {contact ? <ContactUS /> : ''}
        </div> 
      </div>
    </div>
  )
}

export default LeftComponent