import React from 'react'
import './home.css'
import Photo1 from './../assets/photo1.png'
import Navbar from './Navbar/Navbar'
import { AiFillGithub, AiFillMediumCircle, AiFillLinkedin } from 'react-icons/ai'

const Home = () => {
  return (
    <>
    <Navbar />
    <div className='home-page'>
        <div className='title'>
            <div className='title1'>
                <h1>Aya Khiouat</h1>
                <h2>Junior Cybersecurity Analyst</h2>
                <p>& IT system maintenance student / Inside LVMH alumni</p>
            </div>
            <h1 className='divi'>__________</h1>
            <img src={Photo1} alt=''></img>
        </div>
        <div className='socials'>
          <h2>Find me on:</h2>
          <div className='links'>
            <a href='https://www.linkedin.com/in/ayakh'><AiFillLinkedin/></a>
            <a href='https://github.com/cbdevsec'><AiFillGithub/></a>
            <a href='https://medium.com/@ayakhiouat'><AiFillMediumCircle/></a>
          </div>
        </div>
    </div>
    </>
  )
}

export default Home