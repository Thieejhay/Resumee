import React from 'react';
import { Content } from './components/Content';
import { Content2 } from './components/Content2';
import { Content3 } from './components/Content3';
import { Content4 } from './components/Content4';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';


const App = () => {

  return (
        <div className='min-h-screen text-lg bg-[#1d1d1d] block w-screen font-sans text-[#fff] overflow-x-hidden overflow-y-scroll border-box z-auto'>
          <NavBar />
          <Content />
          <Content2 />
          <Content3 />
          <Content4 />
          <Footer />
      </div>
    
  )
};

export default App