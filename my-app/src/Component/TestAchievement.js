import React from 'react'
import '../CSS/Achievement.css'
import google from '../image/google.png'

function TestAchievement() {
  return (
    <div>
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
  )
}

export default TestAchievement