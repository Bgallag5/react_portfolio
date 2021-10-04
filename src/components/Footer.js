import React from 'react';
import {Link} from 'react-router-dom';


export default function Footer() {
    return (
        <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-heading'>
            Find me at...
          </p>
          <div className='input-areas'>

          </div>
        </section>

        <div class='footer-links'>
          <div className='footer-link-wrapper'>

            <div class='footer-link-items'>
              <Link to='/sign-up'><h2>LinkedIn</h2><i className="fab fa-linkedin"></i></Link>
            </div>

            <div class='footer-link-items'>
              <Link to='/'><h2>Github</h2><i className="fab fa-github"></i></Link>
            </div>

            <div class='footer-link-items'>
              <Link to='/'><h2>Youtube</h2><i className="fab fa-youtube"></i></Link>
            </div>

            <div class='footer-link-items'>
              <Link to='/'><h2>Contact Me</h2><i className="far fa-envelope"></i><i className="fas fa-mobile-alt"></i></Link>
            </div>

          </div>
        </div>
        
      </div>
    )
}
