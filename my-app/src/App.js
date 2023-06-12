import { useEffect, useState } from 'react';
import './App.css';
import Achievement from './Component/Achievement';
import ContactUs from './Component/ContactUs';
import EducationComponent from './Component/EducationComponent';
import LeftComponent from './Component/LeftComponent';
import PersonalWork from './Component/PersonalWork';
import SkillsComponent from './Component/SkillsComponent';
import WorkExprience from './Component/WorkExprience';
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loading,setLoading] = useState(false)
  //const isMobile = window.innerWidth <= 768;
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },3000)
  },[])
  
  return (
    <div className="App">
      {
        loading ?
        <div className='spinner'>
          <HashLoader 
            size={150}
            color={"#dfe3e6"}
            loading={loading}
          />
        </div>
        
        :
        <>
        <div className='leftComponent'>
        <LeftComponent /> 
      </div>
      
      <div className='Right_component'>
        <div style={{color:'#e6e6e6'}} className='Right_component__titel' >
          <h1>MD.NASMUS SHAHADAT</h1>
          <h4>FRONT-END DEVELOPER</h4>
        </div>
        <SkillsComponent />
        <EducationComponent />
        <WorkExprience />
        <PersonalWork />
        <Achievement name='shakil' /> 
        <ContactUs />
      </div>
        </>
      }
      
    </div>
  );
}

export default App;
