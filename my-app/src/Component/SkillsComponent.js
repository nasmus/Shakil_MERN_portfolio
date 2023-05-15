import React from 'react'
import '../CSS/SkillComponent.css'

function SkillsComponent() {
  return (
    <div>
        <div className='Right_component__skills' >
          <div style={{paddingLeft:'30px'}} data-aos="fade-up" >
          <h1>Skills</h1>
            <div className='Right_component_skills__component' >
              <div className='Right_component_skills__Left' >
                <ul style={{paddingBottom:'20px'}}>
                  <h3>
                  <li>FreamWork</li>
                  </h3>
                  <ul>
                    <h4><li>React.js</li></h4> 
                    <h4><li>Express.js</li></h4> 
                    <h4><li>Redux</li></h4> 
                    <h4><li>Node.js</li></h4> 
                  </ul>
                </ul>

                <ul>
                  <h3>
                  <li>Language</li>
                  </h3>
                  <ul>
                    <h4><li>JavaScript</li></h4> 
                    <h4><li>Python</li></h4> 
                    <h4><li>HTML5</li></h4>
                    <h4><li>CSS</li></h4> 
                  </ul>
                </ul>
              </div>
              <div className='Right_component_skills__right' >
              <ul>
                <h4><li>MongoDb</li></h4>
                <h4><li>JWT Token</li></h4>
                <h4><li>JSX</li></h4>
                <h4><li>Context Api</ li></h4>
              </ul>
            </div>
            </div>
          </div>
            
        </div>
    </div>
  )
}

export default SkillsComponent