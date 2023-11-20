import React from 'react'
import './Home.css'
import HeroComponent from '../components/hero/HeroComponent'

import BG from '../assets/bg.jpg'
import FooterComponent from '../components/footer/FooterComponent';

export default function Home() {
  return (
    <>
      <div className='main-container'>
        <img className='bg-img' src={BG} alt='bg' />

        <div className='outer-box'>
          <HeroComponent />
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
