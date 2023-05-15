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
                <h1 >SSC</h1>
                <h4>JAN2010 - MAY2012</h4>
            </div>
            <div className='Education_contant__background' >
                <ul>
                  <li><p>Built over fifty new websites over the course of eight months</p></li>
                </ul>
                <ul>
                  <li><p>Built over fifty new websites over the course of eight months</p></li>
                </ul>
            </div>
          </div>
          <div className='Education__contant' >
            <div className='Education_contant__title' >
                <h1>HSC</h1>
                <h4>JUN2012 - JUN2014</h4>
            </div>
            <div className='Education_contant__background' >
                <ul><li><p>Built over fifty new websites over the course of eight months</p></li></ul>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default EducationComponent