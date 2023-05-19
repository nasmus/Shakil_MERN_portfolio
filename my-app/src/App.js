import './App.css';
import Achievement from './Component/Achievement';
import ContactUs from './Component/ContactUs';
import EducationComponent from './Component/EducationComponent';
import LeftComponent from './Component/LeftComponent';
import PersonalWork from './Component/PersonalWork';
import SkillsComponent from './Component/SkillsComponent';
import WorkExprience from './Component/WorkExprience';

function App() {
  
  return (
    <div className="App">
      <LeftComponent />
      <div className='Right_component'>
        <div style={{color:'#ff8000'}} className='Right_component__titel' >
          <h1>MD.NASMUS SHAHADAT</h1>
          <h4>FRONT END DEVELOPER</h4>
        </div>
        <SkillsComponent />
        <EducationComponent />
        <WorkExprience />
        <PersonalWork />
        <Achievement />
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
