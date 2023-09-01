import React from 'react';
import Navbar from '../components/Navbar';
import homeImage from '../assests/home.jpg'
import '../styles/home.css'


function Home() {
  return (
    <>
    <Navbar/>
    <div className='home-div'>
      <img className='bg-image' src={homeImage} alt="home" />
      <div className='inner-home-div'>
      <h1>Hey! Welcome to this world of Happiness.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ea!</p>
      <button className='newAdditon-btn click'>See Our Newest Addition</button>
      </div>
    </div>
    
    </>
  )
}

export default Home