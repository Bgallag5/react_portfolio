import React from 'react';
import {Link} from 'react-router-dom';


export default function Footer() {
    return (
        <div className='footer-container'>
        <section className='footer-section'>
          <p className='footer-heading'>
            Find me at...
          </p>
          <div className='input-areas'>

          </div>
        </section>

        <div className='footer-links'>
          <div className='footer-link-wrapper'>

            <div className='footer-link-items'>
              <a href='https://www.linkedin.com/in/benjamin-g-2b16281b1/' target='_blank' rel='noreferrer'><h2>LinkedIn</h2><i className="fab fa-linkedin"></i></a>
            </div>

            <div className='footer-link-items'>
              <a href='https://github.com/Bgallag5' target='_blank' rel='noreferrer'><h2>Github</h2><i className="fab fa-github"></i></a>
            </div>

            <div className='footer-link-items'>
              <a href='https://www.youtube.com/channel/UC0vquGJDrsauIpNZMAr-ZYA' target='_blank' rel='noreferrer'><h2>Youtube</h2><i className="fab fa-youtube"></i></a>
            </div>

            <div className='footer-link-items'>
              <Link to='/contact-page' ><h2>Contact Me</h2><i className="far fa-envelope"></i><i className="fas fa-mobile-alt"></i></Link>
            </div>

          </div>
        </div>
        
      </div>
    )
}



