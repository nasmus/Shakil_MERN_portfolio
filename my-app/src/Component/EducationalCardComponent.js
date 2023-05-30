import React from 'react'
import '../CSS/EducationComponent.css'
import google from '../image/google.png'
import aiub from '../image/aiub.png'
export default function EducationalCardComponent() {
  return (
    <div>
        <div className='education__content'>
              <div className='education Left-container '>
                <img src={aiub} alt='aiub' />
                <div className='text-box'>
                  <h2>AIUB</h2>
                  <small>OCT 2019</small>
                  <p>Best Project Display (SP1)</p>
                  <span className='Left-container-arrow' ></span>
                </div>                
              </div>
              <div className='container Right-container'>
              <img src={aiub} alt='aiub' />
                <div className='text-box'>
                  <h2>Programing Contest</h2>
                  <small>2018</small>
                  <p>Appreciation for participation in event</p>
                  <span className='Right-container-arrow' ></span>
                </div>                
              </div>
            </div>
    </div>
  )
}
