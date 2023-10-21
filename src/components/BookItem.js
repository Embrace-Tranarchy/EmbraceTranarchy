import React from 'react';
import { Link } from 'react-router-dom';

function BookItem(props) {
  return (
    <>
      <li className='books__item'>
        <Link className='books__item__link' to={props.path}>
          <figure className='books__item__pic-wrap' data-category={props.genre}>
            <img
              className='books__item__img'
              alt='Book Cover Img'
              src={props.src}
            />
          </figure>
          <div className='books__item__info'>
            <h5 className='books__item__title'>{props.title}</h5>
            <h6 className='books__item__author'>{props.author}</h6>
            <p className='books__item__desc'>{props.desc}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default BookItem;
