import React from 'react';
import styled from 'styled-components';
import { SiTailwindcss, SiTypescript, SiReact, SiMaterialui, SiChakraui, SiGithub } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';


export const CardAnime = () => {
  return (
    <Wrapper>
        <CardWrapper>
            <Card className='relavtive bg-[#F0DB4F]'>
                <img alt='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqbbJymblNozHKOUaTgZwVd26waUKJBZsleA&usqp=CAU' className='object-cover w-24 h-24 rounded-full border-2 border-solid mt-[-45px]'></img>
                <p className='text-white font-semibold lg:text-2xl text-xl items-center leading-none ml-2 lg:self-center'>JAVASCRIPT</p>
            </Card>
            <Card className=' relavtive bg-[#61DBFB]'>
                <SiReact className='object-cover w-24 h-24 rounded-full border-2 border-solid mt-[-45px] fill-[#61DBFB] bg-white'/>
                <p className='text-white font-semibold lg:text-2xl text-xl items-center leading-none ml-2 lg:self-center'>REACT Js</p>
            </Card>
            <Card className='relavtive bg-[#07B6D5]'>
                <SiTailwindcss className='object-cover w-24 h-24 rounded-full border-2 border-solid mt-[-45px] fill-[#07B6D5] bg-white'/>
                <p className='text-white font-semibold lg:text-2xl text-xl items-center leading-none ml-2 lg:self-center'>TAILWIND CSS</p>
            </Card>
            <Card className='relavtive bg-[#017ACB]'>
                <SiTypescript className='object-cover w-24 h-24 rounded-full border-2 border-solid mt-[-45px] fill-[#017ACB] bg-white'/>
                <p className='text-white font-semibold lg:text-2xl text-xl items-center leading-none ml-2 lg:self-center'>TYPESCRIPT</p>
            </Card>
            <Card className=' relavtive bg-[#111]'>
                <TbBrandNextjs className='object-cover w-24 h-24 rounded-full border-2 border-solid mt-[-45px] fill-[#111] bg-white'/>
                <p className='text-white font-semibold lg:text-2xl text-xl items-center leading-none ml-2 lg:self-center'>Next Js</p>
            </Card>
            <Card className=' relavtive bg-[#0072E5]'>
                <SiMaterialui className='object-cover w-24 h-24 rounded-full border-2 border-solid mt-[-45px] fill-[#0072E5] bg-white'/>
                <p className='text-white font-semibold lg:text-2xl text-xl items-center leading-none ml-2 lg:self-center'>Material UI</p>
            </Card>
            <Card className=' relavtive bg-[#319795]'>
                <SiChakraui className='object-cover w-24 h-24 rounded-full border-2 border-solid mt-[-45px] fill-[#319795] bg-white'/>   
                <p className='text-white font-semibold lg:text-2xl text-xl items-center leading-none ml-2 lg:self-center'>Chakra UI</p>
            </Card>
            <Card className='relavtive bg-[#111]'>
                <SiGithub className='object-cover w-24 h-24 rounded-full border-2 border-solid mt-[-45px] fill-[#111] bg-white'/>
                <p className='text-white font-semibold lg:text-2xl text-xl items-center leading-none ml-2 lg:self-center'>GIT</p>
            </Card>
        </CardWrapper>
    </Wrapper>
  )
}


const Wrapper = styled.div`
height: 100%;
width: 100%;
display: grid;
place-content : start;
@media (max-width: 640px) {
    display: block;
    align-items: center;
}
`
const CardWrapper = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 40px;
padding: 10px;
pointer-events: none;
margin-left: 10rem;
border-width: 0;
border-style: solid;
box-sizing: border-box;
@media (max-width: 640px) {
    display: block;
    position: relative;
    padding: 7px;
    margin-left: 4rem;
}
`
const Card = styled.div`
display: flex;
max-width: 250px;
width: 100%;
height: 80px;
padding: 10px;
cursor: pointer;
opacity: 1;
transition: all 150ms ease-in-out;
justify-self: center;
border: solid;
border-radius: 0.5rem;
@media (max-width: 640px) {
    display: block;
    padding: 0px;
    margin-top: 45px;
    justify-self: center;
}
`