import React from 'react'
import './AboutMe.css'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Avatar from './img/avatar.jpg';

function AboutMe() {
  return (
    <div className='about-me'>
        <img src={Avatar} className='avatar'/>
        <div className='about-me-container'>
          <p className='name'>Teddie</p>
          <p className='job'>Front-end Student</p>
          <div className='contact-mail'>
              <EmailIcon style={{marginTop: '12px'}}/>
              <a href='mailto:ducanhtran212@gmail.com'>ducanhtran212@gmail.com</a>
          </div>

          <div className='contact-number'>
              <PhoneIcon style={{marginTop: '12px'}}/>
              <a href="tel:+81.4306.8541">070 4306 8541</a>
          </div>

          <p className='introduction'>
              Self-motivated developer, who is willing to learn and create outstanding UI applications.
          </p>
        </div>
    </div>
  )
}

export default AboutMe