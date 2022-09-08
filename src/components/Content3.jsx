import React from 'react'
import { CardAnime } from './animations/CardAnime';
// import { useEffect, useRef } from 'react';
import { TextAnime3 } from './animations/TextAnime3';

export const Content3 = () => {

    // const canvasRef = useRef(null);
    // useEffect(()=> {
    //     draw();
    // })
        
    //     const draw = () => {
    //         const canvas = canvasRef.current
    //         const ctx = canvas.getContext('2d');
    //         ctx.fillStyle = 'rgb(200, 0, 0)';
    //         ctx.fillRect(10, 10, 50, 50);
    //         ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    //         ctx.fillRect(30, 30, 50, 50);
    //     }
        

    

  return (
    <div className='overflow-hidden p-30 h-screen relative transition-opacity delay-400 opacity-100 inline-block' id='skills'>
        <div className='inline-block w-[40%] pl-20 '>
            <header>
            <h2 className='text-[#08fdd8] font-bold mt-0 relative mb-10 left--2.5 text-7xl leading-25 block'><TextAnime3 /></h2>
            </header>
            <p className='relative block mb-5 text-base'>
                Focused and Dedicated Frontend developer with the eagerness to learn and improve on set skills given the opportunity. Dependable and quick-learning team player with effective communication and organization skills.
            </p>
            <p className='relative block mb-5 text-base'>
                Completely willing to take on tasks in order to reach set goals and also gain additional knowledge and skills required of me in order to progress and improve daily.
            </p>
        </div>
        <div className='w-[60%] absolute inline-block mt-20'>
            <CardAnime />
        </div>
    </div>
  )
}
