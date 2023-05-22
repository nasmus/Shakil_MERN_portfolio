import React from 'react'
import '../CSS/Achievement.css'
import google from '../image/google.png'

export default function Achievement() {
  return (
    <div className='achievement'>
        <div data-aos="fade-up" style={{paddingLeft:'30px'}} className='achievement__section'>
            <h1>Achievement</h1>
            <div className='achievement__content'>
              <div className='container Left-container '>
                <img src={google} />
                <div className='text-box'>
                  <h2>Aiub</h2>
                  <small>2018 - 2019</small>
                  <p>this is the p tag for discription</p>
                  <span className='Left-container-arrow' ></span>
                </div>                
              </div>

              <div className='container Right-container'>
              <img src={google} />
                <div className='text-box'>
                  <h2>Aiub</h2>
                  <small>2018 - 2019</small>
                  <p>this is the p tag for discription</p>
                  <span className='Right-container-arrow' ></span>
                </div>                
              </div>

              <div className='container Left-container'>
              <img src={google} />
                <div className='text-box'>
                  <h2>Aiub</h2>
                  <small>2018 - 2019</small>
                  <p>this is the p tag for discription</p>
                  <span className='Left-container-arrow' ></span>
                </div>                
              </div>

              <div className='container Right-container'>
              <img src={google} />
                <div className='text-box'>
                  <h2>Aiub</h2>
                  <small>2018 - 2019</small>
                  <p>this is the p tag for discription</p>
                  <span className='Right-container-arrow' ></span>
                </div>                
              </div>

              <div className='container Left-container'>
              <img src={google} />
                <div className='text-box'>
                  <h2>Aiub</h2>
                  <small>2018 - 2019</small>
                  <p>this is the p tag for discription</p>
                  <span className='Left-container-arrow' ></span>
                </div>                
              </div>

              <div className='container Right-container'>
              <img src={google} />
                <div className='text-box'>
                  <h2>Aiub</h2>
                  <small>2018 - 2019</small>
                  <p>this is the p tag for discription</p>
                  <span className='Right-container-arrow' ></span>
                </div>                
              </div>
            </div>
        </div>
    </div>
  )
}
