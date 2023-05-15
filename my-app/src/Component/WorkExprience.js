import React from 'react'
import '../CSS/WorkExprience.css'
import Badge from 'react-bootstrap/Badge';

function WorkExprience() {
  return (
    <div className='WorkExprience' >
      <div style={{paddingLeft:'30px'}} data-aos="fade-down" >
      <h1 style={{paddingBottom:'40px'}} >Work</h1>
        <div className='WorkExprience__contant'  >
            <div className='WorkExprience_contant__title' >
                <h2>FSS</h2>
                <h4>JAN2010 - MAY2012</h4>
                <Badge style={{backgroundColor:'green', borderRadius:'5px', padding:'2px'}} bg="primary">
                    Freelance
                </Badge>
            </div>
            <div className='WorkExprience_contant__background' >
                <ul>
                  <li><p>Built over fifty new websites over the course of eight months</p></li>
                </ul>
                <ul>
                  <li><p>Built over fifty new websites over the course of eight months</p></li>
                </ul>
            </div>
          </div>
          <div className='WorkExprience__contant' >
            <div className='WorkExprience_contant__title' >
                <h2>HSC</h2>
                <h4>JUN2012 - JUN2014</h4>
                <Badge bg="success">
                    Present
                </Badge>
            </div>
            <div className='WorkExprience_contant__background' >
                <ul><li><p>Built over fifty new websites over the course of eight months</p></li></ul>
            </div>
          </div>
      </div>
        
    </div>
  )
}

export default WorkExprience