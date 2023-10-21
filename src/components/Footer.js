import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-nav-items'>
            <h2>Nav</h2>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
          </div>
          <div class='footer-link-nav-items'>
            <h2><i className='bi bi-book'/></h2>
            <Link to='/browse'>Browse</Link>
            <Link to='http://cognitoforms.com/embracetranarchy/checkoutrequest'>Borrow</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <p>embracetranarchy@gmail.com </p>
            <p>or @embrace.tranarchy</p>
            <p>on Instagram</p>
          </div>
          <div class='footer-link-items'>
            <h2>Location</h2>
            <p>Planned Parenthood Regina</p>
            <p>2024A Albert St Regina SK</p>
            <p>Saturdays from 10am-5pm</p>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
          </div>
          <small class='website-rights'>Embrace Tranarchy est. 2023</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
