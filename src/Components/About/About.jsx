import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leader Today</h2>
        <p>The university is a lively place full of energy.
            Students from many places come to study.
            Its a space for learning and growth.</p>
        <p>Teachers explain topics with real-life examples.
            Labs and libraries support deep learning.
             Students work on projects and ideas.</p>
        <p>Outside class, clubs and events are active.
           Festivals and sports bring joy and fun.
           It’s more than study — it’s a full experience.</p>
      </div>
    </div>
  )
}

export default About
