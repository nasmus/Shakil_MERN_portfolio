import React from 'react';
import '../CSS/PersonalWork.css';
import { Link } from 'react-router-dom';

function PersonalWork() {
  return (
    <div className='personal__work'>
        <div data-aos="fade-up" className='personal__work__container' style={{paddingLeft:'30px'}} >
          <h1>Personal Project</h1>
            <div className="portfolioPage__body" data-aos="fade-down-left" >
              <div className="portfolioPage__title">
                <h3></h3>
              </div>   
            </div> 
        </div>
    </div>
  )
}

export default PersonalWork