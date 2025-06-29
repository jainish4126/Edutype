import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>we Ensure better education for better word</h1>
        <p>Our cutting-edge curriculum is designed to empower student with the knowledge, skill, and experiences needed to excel skill in the dynamic feild of education</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
