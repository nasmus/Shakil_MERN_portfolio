import React from 'react'
import man from '../image/man.png'
import skills from '../image/skills.png';
import '../CSS/ContactUS.css';
import laptop from '../image/laptop.png';
import mail from '../image/mail.png';
import specdecoder from '../image/specdecoder.png'

function ContactUS() {
  return (
    <div className='contact' >
        <div className='man' >
            <img src={man} />
        </div>
        <div className='skills' >
            <img src={skills} />
        </div>
        <div className='laptop' >
            <img src={laptop} />
        </div>
        <div className='mail' >
            <img src={mail} />
        </div>
        <div className='specdecoder' >
            <img src={specdecoder} />
        </div>
    </div>
  )
}

export default ContactUS