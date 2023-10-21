import React from 'react';

function AboutInfo(props) {
  return (
    <>
      <li className='aboutInfo__item'>
        <div className='aboutInfo__item__link'>
          <div className='aboutInfo__item__info'>
            <h5 className='aboutInfo__item__title'>{props.title}</h5> <br/>
            <p className='aboutInfo__item__desc'>{props.desc}</p>
            <p className='aboutInfo__item__desc2'>{props.desc2}</p>
          </div>
          </div>
      </li>
    </>
  );
}

export default AboutInfo;
