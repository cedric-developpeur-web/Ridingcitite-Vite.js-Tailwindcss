import React from 'react';

const Footer = () => {
  const link = () => {
    window.open('https://github.com/cedric-developpeur-web/Ridingcitite-Vite.js-Tailwindcss.git', '_blank')
  }
  return (
    <footer className='bg-rose-500  w-full h-20'>
      <div className='flex justify-end pt-8 pr-25'>
        <i onClick={link} className="fa-brands fa-github text-3xl text-white cursor-pointer"></i>
      </div>
    </footer>
  );
};

export default Footer;