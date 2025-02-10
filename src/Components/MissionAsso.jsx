import React from 'react';
import data from '../json/fr.json';

const MissionAsso = () => {

  return (
    <section className='py-20'>
      <h2 className='mt-10 mb-0 text-center text-4xl font-sans text-rose-700 font-extrabold'>{data.assoTitle}</h2>
      <div className='flex mt-20'>
        {data.infoAsso.map((e) => (
          <article key={e.id} className='mx-4 w-[15 %]'>
            < h3 className='mt-7 mb-0 font-extrabold text-2xl' > {e.title}</h3>
            <p className='text-base'>{e.description}</p>
          </article>
        ))
        }
      </div >
    </section >
  );
};

export default MissionAsso;