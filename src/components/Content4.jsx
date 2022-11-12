import React, { useRef, useState, useEffect } from 'react';
import { WavyText } from './animations/WavyText';
import emailjs  from '@emailjs/browser';
import { TiContacts } from 'react-icons/ti';

export const Content4 = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ndmgtaj', 'template_z4fozk1', form.current, 'B9MRGWd47gnhHxvKW')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

    const [inView, updateInView] = useState(false);
        useEffect(() => {
            let timeout = setTimeout(() => {
                 updateInView(!inView);
                }, 2000);
            return () => clearTimeout(timeout);
            }, [inView]);

  return (
    <div className='overflow-hidden lg:flex items-center relative transition-opacity delay-400 mt-20 lg:mt-0 px-5' id='contact'>
        <div className='absolute -z-1 text-[60rem] text-[#2b2b2b] left-1/4 font-semibold'>@</div>
        <div className='lg:w-1/2 lg:p-10 p-3 lg:inline-block'>
            <header className='flex flex-row space-x-3 mb-5'>
                <WavyText currentInView={inView}>Contact Me</WavyText>
                <TiContacts size={70} color='#08fdd8' className='z-0'/>
            </header>
            <p className='relative lg:block inline-block mb-5 text-base mr-2 font-bold'>I'm intersted in front end freelance opportunities and projects that improve my skills. However, if you have other request or question, don't hesistate to use the form.</p>
            <div className='w-full pt-[1rem] block relative'>
                    <form className='relative block' ref={form} onSubmit={sendEmail}>
                        <ul className=''>
                            <li className='overflow-hidden inline-block relative w-[45%]'>
                                <input className='w-full b-0 h-[45px] text-[16px] border-box px-[20px] bg-[#2b2b2b] text-[#8d8d8d]' text='text' placeholder='Name' name='user_name'></input>
                            </li>
                            <li className='overflow-hidden inline-block relative w-[45%] ml-[10px]'>
                                <input className='w-full b-0 h-[45px] text-[16px] border-box px-[20px] bg-[#2b2b2b] text-[#8d8d8d]'type='email' placeholder='Email' name='user_email'></input>
                            </li>
                            <li className='overflow-hidden block relative mt-[5px] w-[90%]'>
                                <input className='w-full b-0 h-[30px] text-[16px] border-box px-[20px] bg-[#2b2b2b] text-[#8d8d8d]' type='text' placeholder='Subject' name='Subject'></input>
                            </li>
                            <li className='overflow-hidden block relative mt-[10px] w-[90%]'>
                                <textarea className='w-full b-0 h-[75px] text-[16px] border-box px-[20px] bg-[#2b2b2b] text-[#8d8d8d]' placeholder='Message' name='message'>
                                </textarea>
                            </li>
                            <li className='overflow-hidden block relative my-[5px] w-[90%]'>
                                 <input type='submit' value='Send' className='text-[#08fdd8] text-xl tracking-widest relative w-60 block max-w-xs h-12 text-center leading-0 bg-[#1d1d1d] box-border border-2 border-[#08fdd8] p-2 hover:bg-gradient-to-r from-[#33ccff] to-[#08fdd8] hover:text-[#1d1d1d] opacity-100' />
                            </li>
                        </ul>
                    </form>
                </div>
        </div>
        <div className='lg:absolute relative lg:inline-block block lg:left-3/4 lg:mt-[-70px] mt-10 font-semibold lg:pl-5'>
            <p className='text-3xl ml-5 leading-6 cursor-pointer block ease-out text-[#08fdd8]'>Contacts</p>
            <a href='https://twitter.com/Thieejhay' target='_blank' rel='noreferrer' className='text-2xl ml-5 leading-6 cursor-pointer block mt-[45px] ease-out text-[#08fdd8]'><h3>Twitter</h3></a>
            <a href='https://github.com/Thieejhay' target='_blank' rel='noreferrer' className='text-2xl ml-5 leading-6 cursor-pointer block mt-[40px] ease-out text-[#08fdd8]'><h3>GitHub</h3></a>
            <a href='https://www.linkedin.com/in/tofunmi-tijani-1a796024a/' target='_blank' rel='noreferrer' className='text-2xl ml-5 leading-6 cursor-pointer block mt-[40px] ease-out text-[#08fdd8]'><h3>Linkdln</h3></a>
        </div>
    </div>
  )
}
