import React,{useRef} from 'react';
import '../CSS/ContactRight.css';
import emailjs from '@emailjs/browser';
import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function ContactUs() {
    const form = useRef();
    const sendEmail = (event) => {
        
    
        emailjs.sendForm('service_kg0oz4d', 'template_uzbxh85', form.current, 'ZNX61eK0qbgx-CjH4')
          .then((result) => {
              console.log(result.text);
              console.log("message send")
          }, (error) => {
              console.log(error.text);
          });
          event.target.reset();
      };
  return (
    <div className='contactUs' >
        <div data-aos="fade-up" style={{paddingLeft:'40px'}} className='contactUs__section'>
            <h1 style={{color:'rgb(37, 142, 142)'}} >Write Me A Message</h1>
            <form ref={form} onSubmit={sendEmail} >
            <div className="contact__right" >
                <div className="contact__inputfield">
                    <div className="contact__inputtText">
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <input type="text" placeholder="Phone" name="phone_number"/>
                    </div>
                    <div className="contact__inputTextarea">
                        <textarea className='contact_textarea' name="message" placeholder="Message Me" cols="30" rows="9"  ></textarea>
                    </div>
                </div>
                <div className="contact__button">
                    <Button type='submit' style={{color:'rgb(37, 142, 142)'}} >
                        Send Message
                    </Button>
                </div>
            </div>
            </form>
        </div>
    </div>
  )
}
