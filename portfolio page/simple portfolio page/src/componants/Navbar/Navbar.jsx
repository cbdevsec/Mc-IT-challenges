import React from 'react'
import './navbar.css'
import Logo from './../../assets/photo1.png'
import Button from './../Button'

const Navbar = () => {
  return (
    <nav className='nav'>
        <img src={Logo}></img>
        <Button />
    </nav>
  )
}

export default Navbar