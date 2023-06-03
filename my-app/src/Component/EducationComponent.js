import React from 'react'
import '../CSS/EducationComponent.css'
import education from '../image/education.png';

function EducationComponent() {
  return (
    <div>
        <div className='Education' >
          <div style={{paddingLeft:'30px'}} data-aos="fade-up" >
            <div className='education__logo' >
              <img src={education} alt='educationLogo' />
              <h1 style={{color:'#002D40',paddingLeft:'20px'}} >Education</h1>
            </div>
          <div className='Education__contant' >
            <div className='Education_contant__title' >
                <h1 style={{color:'#002D40'}} >B.Sc</h1>
                <h4>AUG2014 - JNU2020</h4>
            </div>
            <div style={{color:'#002D40'}} className='Education_contant__background' >
                <ul>
                  <li><p>American International University-Bangladesh (AIUB)</p></li>
                </ul>
            </div>
          </div>
          <div className='Education__contant' >
            <div className='Education_contant__title' >
                <h1 style={{color:'#002D40'}} >HSC</h1>
                <h4>JUN2012 - JUN2014</h4>
            </div>
            <div style={{color:'#002D40'}} className='Education_contant__background' >
                <ul><li><p>, Ullapara Science College, Sirajganj</p></li></ul>
            </div>
          </div>
          <div className='Education__contant' >
            <div className='Education_contant__title' >
                <h1 style={{color:'#002D40'}}>SSC</h1>
                <h4>JUN2010 - JUN2012</h4>
            </div>
            <div style={{color:'#002D40'}} className='Education_contant__background' >
                <ul><li><p> Ullapara Merchant Pilot High School, Sirajganj,</p></li></ul>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default EducationComponent