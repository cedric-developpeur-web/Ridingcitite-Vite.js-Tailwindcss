import React from 'react';

const NosCours = () => {

  return (
    <section className='flex flex-col items-center py-8 bg-gray-300'>
      <h2 className='my-8 text-rose-500 font-extrabold text-2xl text-center'>Découvrez nos cours !</h2>
      <a href="/assets/planning-adultes.pdf" target='_blank' rel='noopener noreferrer' className='rounded-[39px] border-rose-400 hover:border-rose-500 border-2 hover:border-4 my-5 py-2 px-3 content-center text-center w-[25%] h-15 text-rose-800 no-underline hover:scale-120 duration-100 hover:duration-150'>Télécharger le plannig de cours pour adultes</a>
      <a href="/assets/planning-enfants.pdf" target='_blank' rel='noopener noreferrer' className='rounded-[39px] border-pink-400 hover:border-pink-500 border-2 hover:border-4 my-5 py-2 px-3 content-center text-center w-[25%] h-15 text-pink-800 no-underline hover:scale-120 duration-100 hover:duration-150'>Télécharger le plannig de cours pour enfants</a>
    </section >
  );
};

export default NosCours;