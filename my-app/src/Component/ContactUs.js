import React from 'react';
import '../CSS/ContactRight.css';
import { Button } from '@mui/material';

export default function ContactUs() {
  return (
    <div className='contactUs' >
        <div data-aos="fade-up" style={{paddingLeft:'40px'}} className='contactUs__section'>
            <h1>Contact Us</h1>
            <div className="contact__right" >
                <div className="contact__inputfield">
                    <div className="contact__inputtText">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Phone" />
                    </div>
                    <div className="contact__inputTextarea">
                        <textarea className='contact_textarea' placeholder="Message" cols="30" rows="9"  ></textarea>
                    </div>
                </div>
                <div className="contact__button">
                        <Button color="success" >
                            Send Message
                        </Button>
                    </div>
            </div>
        </div>
    </div>
  )
}
