import React,{useEffect,useState} from 'react'
import '../CSS/LeftComponent.css'
import logo from '../image/travel.png'

function LeftComponent() {

  const [leftPosition, setLeftPosition] = useState(0);

  const handleScroll = (event) => {
    const scrollAmount = event.deltaY;
    setLeftPosition((prevPosition) => prevPosition - scrollAmount);
  };


  const [scrollPosition, setScrollPosition] = useState(0)
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
      setUiColor('#008ae6')
    }
    else if(scrollPosition >=348 && scrollPosition <=872){
      setUiColor('#5370c6')
    }
    else if(scrollPosition >= 872 && scrollPosition <=1370){
      setUiColor('#729974')
    }
    else if(scrollPosition >= 1370 ){
      setUiColor('#002D40 ')
    }
  })
  
  return (
    
    <div>
      <div style={{backgroundColor:`${uiColor}`}} className='Left_component' >
        <div className='road-animation' onWheel={leftPosition} style={{ left: `${leftPosition}px` }} >
        </div> 
      </div>
    </div>
  )
}

export default LeftComponent