import React from 'react'
import { Link } from 'react-router-dom'
import AppLogo from '../AppLogo'

const Navigation = () => {
  return (
    <nav>
        <AppLogo />
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/">About</a></li>
      <li><a href="/">Services</a></li>
      <li><a href="/">Contact</a></li>
    </ul>
  </nav>
  )
}   

export default Navigation