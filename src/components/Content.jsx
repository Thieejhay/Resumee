import React from 'react';
import { TextAnime } from './animations/TextAnime';
import { HashLink as Link } from 'react-router-hash-link';

export const Content = () => {
  return (
    <div className='h-screen overflow-hidden flex min-h-screen p-30 relative transition-opacity delay-400 opacity-100 mt-10' id='about'>
        <div className='relative pl-20 pt-10'>
            <h1 aria-label=" Hi,  I’m TJ,  web developer" className='font-black text-8xl leading-25 block relative'>
            <span aria-hidden="true" className='inline-block opacity-100 hover:text-[#08fdd8] hover:scale-110 duration-300'>H</span>
            <span aria-hidden="true" className='inline-block ease-out opacity-100 hover:text-[#08fdd8] hover:scale-110 duration-300'>i</span>
            <span aria-hidden="true" className='inline-block opacity-100 hover:text-[#08fdd8] hover:scale-110 duration-300'>,</span><br></br>
            <span aria-hidden="true" className='inline-block opacity-100 hover:text-[#08fdd8] hover:scale-110 duration-300'>I</span>
            <span aria-hidden="true" className='inline-block opacity-100 hover:text-[#08fdd8] hover:scale-110 duration-300'>'</span>
            <span aria-hidden="true" className='inline-block opacity-100 hover:text-[#08fdd8] hover:scale-110 duration-300'>m</span>&nbsp;
            <TextAnime />
            {/* <span aria-hidden="true" className='inline-block opacity-100 hover:text-[#08fdd8] hover:animate-pi'>T</span>
            <span aria-hidden="true" className='inline-block opacity-100 hover:text-[#08fdd8] hover:scale-110 duration-300'>J</span> */}
            <span aria-hidden="true" className='inline-block opacity-100 hover:text-[#08fdd8] hover:scale-110 duration-300'>, </span><br></br>
            <span aria-hidden="true" className='inline-block opacity-100 hover:text-[#08fdd8] hover:scale-110 duration-300'>w</span>
            <span aria-hidden="true" className='inline-block opacity-100 hover:text-[#08fdd8] hover:scale-110 duration-300'>e</span>
            <span aria-hidden="true" className='inline-block opacity-100 hover:text-[#08fdd8] hover:scale-110 duration-300'>b</span>&nbsp;   
            <span aria-hidden="true" className='inline-block opacity-100 hover:text-[#08fdd8] hover:scale-110 duration-300'>d</span>
            <span aria-hidden="true" className='inline-block opacity-100 hover:text-[#08fdd8] hover:scale-110 duration-300'>e</span>
            <span aria-hidden="true" className='inline-block opacity-100 hover:text-[#08fdd8] hover:scale-110 duration-300'>v</span>
            <span aria-hidden="true" className='inline-block opacity-100 hover:text-[#08fdd8] hover:scale-110 duration-300'>e</span>
            <span aria-hidden="true" className='inline-block opacity-100 hover:text-[#08fdd8] hover:scale-110 duration-300'>l</span>
            <span aria-hidden="true" className='inline-block opacity-100 hover:text-[#08fdd8] hover:scale-110 duration-300'>o</span>
            <span aria-hidden="true" className='inline-block opacity-100 hover:text-[#08fdd8] hover:scale-110 duration-300'>p</span>
            <span aria-hidden="true" className='inline-block opacity-100 hover:text-[#08fdd8] hover:scale-110 duration-300'>e</span>
            <span aria-hidden="true" className='inline-block opacity-100 hover:text-[#08fdd8] hover:scale-110 duration-300'>r!</span>
            </h1>
            <p className='text-xl tracking-widest mt-10 text-gray-400 hover:text-[#08fdd8]'>Front End Developer</p><br></br>
            <p className='text-xl tracking-widest my-5 text-gray-400 hover:text-[#08fdd8]'>I bring ideas to reality and develop website that ignite your business</p><br></br>
            <Link to='#contact' smooth className='text-[#08fdd8] text-xl tracking-widest relative w-60 block max-w-xs h-12 text-center leading-0 bg-[#1d1d1d] box-border border-2 border-[#08fdd8] pt-2 hover:bg-[#08fdd8] hover:text-[#1d1d1d] opacity-100'>Contact me!</Link>
        </div>
    </div>
  )
}
