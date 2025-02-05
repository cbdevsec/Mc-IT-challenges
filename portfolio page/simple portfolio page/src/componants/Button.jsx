import React from 'react'
import './button.css'
import {BiGitBranch} from 'react-icons/bi'
import {AiFillStar} from 'react-icons/ai'

const Button = () => {
  return (
    <a className='button'><BiGitBranch/><AiFillStar/></a>
  )
}

export default Button