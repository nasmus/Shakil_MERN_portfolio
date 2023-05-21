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
                <h2>MoneybagGo</h2>
                <h4>JAN2023 - PRESENT</h4>
            </div>
            <div className='WorkExprience_contant__background' >
                <ul>
                  <li><p>Design & Building a micro niche multivendor ecommerce website using ( MERN stack )</p></li>
                </ul>
                <ul>
                  <li><p>develop is as a solo developer</p></li>
                </ul>
            </div>
          </div>
          <div className='WorkExprience__contant' >
            <div className='WorkExprience_contant__title' >
                <h2>Idea Tech</h2>
                <h4>DEC2020 - SEP2020</h4>
                <Badge bg="success">
                    Freelance
                </Badge>
            </div>
            <div className='WorkExprience_contant__background' >
                <ul><li><p>Develope backend functionality for existing laravel website .</p></li></ul>
            </div>
          </div>
          <div className='WorkExprience__contant' >
            <div className='WorkExprience_contant__title' >
                <h2>HelmetTips</h2>
                <h4>FEB2021 - JUN2023</h4>
            </div>
            <div className='WorkExprience_contant__background' >
                <ul><li><p>I was develope this website in wordpress for affiliate marketing.</p></li></ul>
                <ul><li><p>It was successfully run from 2021 April - 2023 january</p></li></ul>
            </div>
          </div>
      </div>
    </div>
  )
}

export default WorkExprience