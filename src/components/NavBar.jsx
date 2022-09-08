import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { CgTwitter } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { RiMenu3Line, RiCloseLine }from 'react-icons/ri';

export const NavBar = () => {
    const[toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='p-10 pb-0 flex justify-between items-center'>
            <p className='text-3xl font-semibold text-[#08fdd8] py-1 px-2 mb-3 items-center '>
              TIJANI TOFUNMI
            </p>
            <div>
               <div className='hidden lg:flex lg:justify-center lg:items-center'>
                    <Link to='#about' smooth><p className='text-2xl ml-5 leading-6 cursor-pointer ease-out hover:text-[#08fdd8]'>About</p></Link> 
                    <Link to='#skills' smooth><p className='text-2xl ml-5 leading-6 cursor-pointer ease-out hover:text-[#08fdd8]'>My Skills</p></Link>
                    <Link to='#work' smooth><p className='text-2xl ml-5 leading-6 cursor-pointer ease-out hover:text-[#08fdd8]'>Work</p></Link>
                    <Link to='#contact' smooth><p className='text-2xl ml-5 leading-6 cursor-pointer ease-out hover:text-[#08fdd8]'>Contact</p></Link>
                    <a href='https://twitter.com/Thieejhay' target='_blank' rel='noreferrer' className='text-2xl ml-5 leading-6 cursor-pointer ease-out'><CgTwitter /></a>
                    <a href='https://github.com/Thieejhay' target='_blank' rel='noreferrer' className='text-2xl ml-5 leading-6 cursor-pointer ease-out'><BsGithub /></a>
                    <a href='https://www.linkedin.com/in/tofunmi-tijani-1a796024a/' target='_blank' rel='noreferrer' className='m-8 hover:color-white'><BsLinkedin /></a>
                    <div className='flex justify-end ml-[1rem] lg:hidden'><RiCloseLine color='#fff' size={26} onClick = {() => {setToggleMenu(false)}}/></div>
                </div>
                <div><RiMenu3Line className='ml-[1rem] lg:hidden' color='#fff' size={26} onClick = {() => {setToggleMenu(true)}}/></div>
            </div>
            {
                toggleMenu && (
                    <div className='flex items-center flex-col text-start z-20 justify-start bg-black text-white p-8 mt-2 top-0 right-0 fixed w-[300] bottom-0 lg:hidden h-fit'>
                        <div className='flex justify-end'><RiCloseLine color='white' size={26} onClick = {() => {setToggleMenu(false)}}/></div>
                            <Link to='#about' smooth><p className='p-2 border-b-1 border-white'>About</p></Link>
                            <Link to='#skills' smooth><p className='p-2 border-b-1 border-white'>My Skills</p></Link>
                            <Link to='#work' smooth><p className='p-2 border-b-1 border-white'>Work</p></Link>
                            <Link to='#contact' smooth><p className='p-2 border-b-1 border-white'>Contact</p></Link>
                            <a href='https://twitter.com/Thieejhay' target='_blank' rel='noreferrer' className='m-2 inline-block'><CgTwitter /></a>
                            <a href='https://github.com/Thieejhay inline-block' target='_blank' rel='noreferrer' className='m-2 inline-block'><BsGithub /></a>
                            <a href='https://www.linkedin.com/in/tofunmi-tijani-1a796024a/' target='_blank' rel='noreferrer' className='m-2 inline-block'><BsLinkedin /></a>
                    </div>
                )
            }
    </div>
  )
}
