import React from 'react'
import '../CSS/EducationComponent.css'

function EducationComponent() {
  return (
    <div>
        <div className='Education' >
          <div style={{paddingLeft:'30px'}} data-aos="fade-up" >
          <h1 style={{paddingBottom:"40px"}} >Education</h1>
          <div className='Education__contant' >
            <div className='Education_contant__title' >
                <h1>B.Sc</h1>
                <h4>AUG2014 - JNU2020</h4>
            </div>
            <div className='Education_contant__background' >
                <ul>
                  <li><p>American International University-Bangladesh (AIUB)</p></li>
                </ul>
            </div>
          </div>
          <div className='Education__contant' >
            <div className='Education_contant__title' >
                <h1>HSC</h1>
                <h4>JUN2012 - JUN2014</h4>
            </div>
            <div className='Education_contant__background' >
                <ul><li><p>, Ullapara Science College, Sirajganj</p></li></ul>
            </div>
          </div>
          <div className='Education__contant' >
            <div className='Education_contant__title' >
                <h1>SSC</h1>
                <h4>JUN2010 - JUN2012</h4>
            </div>
            <div className='Education_contant__background' >
                <ul><li><p> Ullapara Merchant Pilot High School, Sirajganj,</p></li></ul>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default EducationComponent