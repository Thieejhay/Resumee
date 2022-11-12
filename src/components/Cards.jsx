import React from 'react';
import {FcBinoculars} from 'react-icons/fc';
import {GoCode} from 'react-icons/go';

export const Cards = (props) => {
  return (
    <div>
        <div className='flex flex-wrap'>
            <div className='text-white border-2 border-solid border-[#08fdd8] rounded-md p-4 m-4 hover:bg-gradient-to-r from-[#33ccff] to-[#08fdd8]'>
                <h2 className='text-2xl pb-4 border-b-2 border-b-solid border-white'>{props.title}</h2>
                <h4>{props.stack}</h4>
                <p>{props.desc}</p>
                <div className='flex space-x-5'>
                    <a href={props.live} target='_blank' rel='noreferrer' className='border-b border-solid font-bold'><p className='flex flex-row'> Link  <FcBinoculars size={25} className='align-bottom' /></p></a>
                    <a href={props.github} target='_blank' rel='noreferrer' className='border-b border-solid font-bold'><p className='flex flex-row'>Code <GoCode size={20} className='align-bottom'/></p></a>
                </div>
            </div>
        </div>
    </div>
  )
}




//  