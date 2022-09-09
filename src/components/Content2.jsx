import React from 'react'
import { TextAnime2 } from './animations/TextAnime2'

export const Content2 = () => {
  return (
    <div className='overflow-hidden lg:p-30 min-h-0 relative transition-opacity delay-400 block mt-10 opacity-100 mb-10' id='work'>
        <div className='absolute -z-1 text-[30rem] text-[#2b2b2b] left-1/2 top-[5rem] font-semibold'>Work</div>
        <div className='flex justify-between pl-7 lg:pl-20 relative mb-10'>
            <div className='relative'>
                <header>
                    <h2 className='text-[#08fdd8] font-bold mt-0 relative mb-10 left--2.5 lg:text-7xl text-4xl leading-25 block'><TextAnime2 /></h2>
                </header>
                <p className='relative inline-block mb-5 text-base'>
                A small gallery of recent projects chosen by me.
                </p>
                <a target='_blank' rel='noreferrer' href='https://docs.google.com/document/d/e/2PACX-1vRFppo3zLmMDpuAHdfm34m3kNG1AwmEPzTBSBamAa6jk0tAhf3VtjQaVIjdU8aL_5LILumpISs0e-BC/pub' className='text-[#08fdd8] text-xl tracking-widest relative w-60 block max-w-xs h-12 text-center leading-0 bg-[#1d1d1d] box-border border-2 border-[#08fdd8] pt-2 hover:bg-[#08fdd8] hover:text-[#1d1d1d] opacity-100 lg:left-full'>
                  See Resume..
            </a>
            </div>
        </div>
    </div>
  )
}
