import React from 'react'
import { CardAnime } from './animations/CardAnime';
import { useState, useEffect } from 'react';
import { WavyText } from './animations/WavyText';

export const Content3 = () => {
    const [inView, updateInView] = useState(false);
        useEffect(() => {
            let timeout = setTimeout(() => {
                 updateInView(!inView);
                }, 2000);
            return () => clearTimeout(timeout);
            }, [inView]);

  return (
    <div className='overflow-hidden lg:p-30 lg:h-screen relative transition-opacity delay-400 opacity-100 lg:inline-block p-5' id='skills'>
        <div className='lg:inline-block lg:w-[40%] lg:p-10 p-3 block'>
            <header>
                <WavyText currentInView={inView}>Me, Myself and I</WavyText>
            </header>
            <p className='relative lg:block inline-block mb-8 text-lg mr-2 font-bold'>
                Focused and Dedicated Frontend developer with the eagerness to learn and improve on set skills given the opportunity. Dependable and quick-learning team player with effective communication and organization skills.
            </p>
            <p className='relative lg:block inline-block text-lg mr-2 font-bold'>
                Completely willing to take on tasks in order to reach set goals and also gain additional knowledge and skills required of me in order to progress and improve daily.
            </p>
        </div>
        <div className='lg:w-[60%] lg:absolute lg:inline-block mt-20 lg:pl-0 block w-screen'>
            <CardAnime />
        </div>
    </div>
  )
}
