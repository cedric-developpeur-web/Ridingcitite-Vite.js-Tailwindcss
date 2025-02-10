import React from 'react';
import data from '../json/fr.json';

const Membres = () => {
  return (
    <>
      <section className='bg-gradient-to-r from-rose-500 to-pink-600 py-15'>
        <h3 className='text-2xl text-white font-extrabold text-center'>{data.membresTitle}</h3>
        <div className='flex justify-center gap-x-15'>
          {data.membres.map((ev) => (
            <article className='mt-20' key={ev.id}>
              <img src={ev.picture[0].src} alt={ev.picture[0].alt} />
              <h4 className='text-white text-center mt-4'>{ev.name}</h4>
              <p className='text-white text-center'>{ev.info}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Membres;