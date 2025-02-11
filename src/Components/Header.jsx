import React from 'react';
import picture from '/assets/header.png';

const Header = () => {
  return (
    <header>
      <div className='flex justify-center'>
        <img src={picture} alt="image d'un skate" />
      </div>
    </header>
  );
};

export default Header;