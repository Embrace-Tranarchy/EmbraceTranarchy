import React from 'react';
import '../App.css';
import { Button, ButtonAlt } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>EMBRACE TRANARCHY</h1>
      <p>Non-profit community library</p>
      <div className='hero-btns'>
        <ButtonAlt
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          BROWSE COLLECTION
        </ButtonAlt>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          REQUEST TO BORROW
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
