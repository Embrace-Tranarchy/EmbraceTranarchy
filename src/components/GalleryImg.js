import React from 'react';

function GalleryImg(props) {
  return (
    <>
      <li className='imgGallery__item'>
        <div className='books__item__link'>
      <figure className='imgGallery__item__pic-wrap'>
            <img
              className='imgGallery__item__img'
              src={props.src}
              alt='Img Gallery Item'
            />
          </figure>
        <div className='imgGallery__item__link'>
          <div className='imgGallery__item__info'>
            <p className='imgGallery__item__caption'>{props.caption}</p>
          </div>
          </div>
          </div>
      </li>
    </>
  );
}

export default GalleryImg;
