import React from 'react';
import './Info.css';
import AboutInfo from './AboutInfo';
import GalleryImg from './GalleryImg';


function Info() {
  return (
    <>
    <div className='aboutInfo'>
      <div className='aboutInfo__container'>
        <div className='aboutInfo__wrapper'>
          <ul className='aboutInfo__items'>
            <AboutInfo
              title='Who are we?'
              desc='We are a volunteer run community based non-profit library that is focused on sharing literature created by and for trans people.'
              desc2='Our books are 100% free to access and we encourage local authors to reach out so that we can share your works with the community!'
            />
            <AboutInfo
              title='Where is the library?'
              desc='You can find us in person at Planned Parenthood Regina (2024A Albert Street) every Saturday from 10am-5pm.'
              desc2='Outside of this timeframe we can be reached on instagram (@embrace.tranarchy) or via email embracetranarchy@gmail.com'
            />
             <AboutInfo
              title='How does it work?'
              desc="You can check out our books at any time via the 'Borrow' button on this website, or via email or instagram dm, OR in person on Saturdays at Planned Parenthood Regina."
              desc2='If you are not able to pick up the book in person on Saturdays we are happy to try to work out an alternative delivery method!'
            />
            </ul>
            <ul className='aboutInfo__items'>
            <AboutInfo
              title="When was this created?"
              desc='This library is a project developed through Into the Streets YQR, planning for this begain in February of 2023'
              desc2='The first pop-up was on September 2, 2023!'
            />
            <AboutInfo
              title='Are there any fees?'
              desc="None at all! The library is completely free to access and we do not believe in late fees for books kept past their checkout date."
              desc2='If you are not done reading by your check out date we are happy to grant extensions.'
            />
            <AboutInfo
              title="What you can do to support us:"
              desc='Check out books from the library, tell all of your friends about us, follow us on instagram (@embrace.tranarchy), and donate books written by trans authors to our collection.'
            />
            </ul>
        </div>
      </div>
    </div>
    <div className='imgGallery'>
      <div className='imgGallery__container'>
        <div className='imgGallery__wrapper'>
            <ul className='imgGallery__item'>
            <GalleryImg
                src='images\littleTable1.jpg'
                caption='Our first day at Planned Parenthood Regina! Our tiny table was quickly outgrown because so many wonderful members of our community donated books <3'
            />
            <GalleryImg
                src='images\bigTable1.jpg'
                caption='Our typical table display at Planned Parenthood Regina'
            />
            <GalleryImg
                src='images/protestTable.jpg'
                caption='Our very first pop-up on September 2, 2023!'
            />
            </ul>
            <ul className='imgGallery__item'>
            <GalleryImg
                src='images\catOnBooks.png'
                caption='Drawing of a cat sleeping on a stack of books'
            />
            <GalleryImg
                src='images/wordsAndSquiggles.jpg'
                caption="Just Doodlin'"
            />
            <GalleryImg
                src='images\catLookingUp.png'
                caption='Another cat drawing'
            />
            </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default Info;
