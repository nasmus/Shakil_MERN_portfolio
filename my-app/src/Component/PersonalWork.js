import React from 'react';
import '../CSS/PersonalWork.css';
import moneybaggo from '../image/moneybaggo.png';

function PersonalWork() {
  return (
    <div className='personal__work'>
        <div data-aos="fade-up" className='personal__work__container' style={{paddingLeft:'30px'}} >
          <h1>DREAM</h1>
            <div className="portfolioPage__body" data-aos="fade-down-left" >
              <div className="portfolioPage__title">
                 <img src={moneybaggo} />
              </div>   
            </div> 
        </div>
    </div>
  )
}

export default PersonalWork