import React from 'react';
import '../CSS/PersonalWork.css';
import moneybaggo from '../image/moneybaggo.png';
import dream from '../image/dream.png'

function PersonalWork() {
  return (
    <div className='personal__work'>
        <div data-aos="fade-up" className='personal__work__container' style={{paddingLeft:'30px'}} >
          <div className='dream_logo'>
            <img src={dream} />
            <h1 style={{color:'#fff'}} >Transforming Dreams Into Reality</h1>
          </div>
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