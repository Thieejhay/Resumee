import React from 'react'
import { Cards } from './Cards'
import Data from './Data'
import { HiBriefcase }from 'react-icons/hi';
import { WavyText } from './animations/WavyText';
import { useState } from 'react'
import { useEffect } from 'react'



export const Content2 = () => {
const card = Data.map(items =>{
  return <Cards
   key = {items.id}
   {...items} />
})

const [inView, updateInView] = useState(false);
useEffect(() => {
  let timeout = setTimeout(() => {
    updateInView(!inView);
  }, 2000);

  return () => clearTimeout(timeout);
}, [inView]);
  return (
    <div className='overflow-hidden lg:p-30 min-h-0 relative transition-opacity delay-400 block mt-10 opacity-100 mb-10 p-5' id='work'>
        {/* <div className='absolute -z-1 text-[30rem] text-[#2b2b2b] left-1/4 top-[5rem] font-semibold'>Work</div> */}
        <div className='flex p-3 lg:p-10 relative mb-10'>
            <div className='relative'>
                <header className='flex flex-row'>
                    <WavyText currentInView={inView}>My Portfolio</WavyText>
                    <HiBriefcase size={70} color='#00CCBB'/>
                </header>
                <p className='relative inline-block mb-5 text-base'>
                A small gallery of recent projects chosen by me.
                </p>
                {card}
                <a target='_blank' rel='noreferrer' href='https://docs.google.com/document/d/e/2PACX-1vRFppo3zLmMDpuAHdfm34m3kNG1AwmEPzTBSBamAa6jk0tAhf3VtjQaVIjdU8aL_5LILumpISs0e-BC/pub' className='text-[#08fdd8] text-xl w-60 h-12 text-center bg-[#1d1d1d] box-border border-2 border-[#08fdd8] p-2 block hover:bg-[#08fdd8] opacity-100 hover:text-[#1d1d1d] tracking-widest absolute right-0'>See Resume...</a>
            </div>
        </div>
    </div>
  )
}
