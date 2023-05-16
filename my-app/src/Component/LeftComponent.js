import React,{useEffect,useState} from 'react'
import '../CSS/LeftComponent.css'
import logo from '../image/travel.png'
import NameComponent from './NameComponent';

function LeftComponent() {


    // const [position, setPosition] = useState(0);
    // const boxWidth = 100;
    // useEffect(() => {
    //   const handleScroll = (event) => {
    //     // Calculate the new position based on the scroll event
    //     const newPosition = position + event.deltaY;
  
    //     // Update the position
    //     setPosition(newPosition);
    //   };
  
    //   // Add event listener for the "wheel" event
    //   window.addEventListener('wheel', handleScroll);
  
    //   // Clean up the event listener on component unmount
    //   return () => {
    //     window.removeEventListener('wheel', handleScroll);
    //   };
    // }, [position]);


  


  const [scrollPosition, setScrollPosition] = useState(0)
  const [nameScreen, setNameScreen] = useState(false);
  const [education, setEducation] = useState(false);
  const [skills, setSkills] = useState(false);
  const [workExprience, setWorkExprience] = useState(false);
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
      setUiColor('#008ae6');
      setNameScreen(true);
    }
    else if(scrollPosition >=348 && scrollPosition <=872){
      setUiColor('#5370c6');
      setEducation(true);
    }
    else if(scrollPosition >= 872 && scrollPosition <=1370){
      setUiColor('#729974')
      setSkills(true);
    }
    else if(scrollPosition >= 1370 ){
      setUiColor('#002D40 ');
      setWorkExprience(true)
    }
  })
  
  return (
    <div>
      <div style={{backgroundColor:`${uiColor}`}} className='Left_component' >
        <div className='road-animation' >
          <div className='rain' >
            <NameComponent />
          </div>
        </div> 
      </div>
    </div>
  )
}

export default LeftComponent