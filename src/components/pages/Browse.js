import React from 'react';
import '../../App.css';
import Books from '../Books';
import Footer from '../Footer';

function Browse() {
   return (
    <>                                                              
    <h1 className='Browse'>Browse</h1>
      <Books />
      <Footer />
    </>
  );
}

export default Browse;  