import React from 'react'
import styled, { keyframes } from 'styled-components';

export const TextAnime3 = () => {
    const Array = 'Me, Myself and I'.split('')
  return (
    <Wrapper>
        {Array.map((item, index)=>(
            <span key={index}>{item}</span>
        ))}
    </Wrapper>
  )
}


const animation = keyframes`
0% { opacity: 0; transform: translateY(-100px) skewY(10deg) rotateZ(30deg); filter: blur(10px);}
25% { opacity: 0; transform: translateY(0) skewY(0deg) rotateZ(0deg); filter: blur(0px);}
75% { opacity: 1; transform: translateY(0) skewY(0deg) rotateZ(0deg); filter: blur(1px);}
100% { opacity: 0; transform: translateY(-100px) skewY(10deg) rotateZ(30deg); filter: blur(10px);}
`
const Wrapper = styled.span`
display: inline-block;
span {
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 9s;
    animation-fill-mode: forward;
    animation-iteration-count: infinite;
    color: #08fdd8
 }
 span:nth-child(1) {
    animation-delay: 1s;
 }
 span:nth-child(2) {
    animation-delay: 1s;
 }
 span:nth-child(3) {
    animation-delay: 1s;
 }
 span:nth-child(4) {
    animation-delay: 1s;
 }
 span:nth-child(5) {
    animation-delay: 1s;
 }
 span:nth-child(6) {
    animation-delay: 1s;
 }
 span:nth-child(7) {
    animation-delay: 1s;
 }
 span:nth-child(8) {
    animation-delay: 1s;
 }
 span:nth-child(9) {
    animation-delay: 1s;
 }
 span:nth-child(10) {
    animation-delay: 1s;
 }
`