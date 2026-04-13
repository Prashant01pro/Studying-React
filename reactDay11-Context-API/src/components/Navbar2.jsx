import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

function Navbar2(props) {

    const data=useContext(ThemeDataContext)

  return (
    <div className='nav2'>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Services</h4>
        <h4>{props.theme}</h4>
        <h4>{data}</h4>
      
    </div>
  )
}

export default Navbar2
