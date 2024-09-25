import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {

  const [dropdown, setDropdown] = useState(false);


  return (
    <div className='navbar'>
        <button className='drop-btn' onClick={() => setDropdown(!dropdown)}><FontAwesomeIcon icon={faBars}/></button>
        <div className={dropdown === false? 'drop-content' : 'drop-content-show'}>
          <Link to="/" onClick={() => setDropdown(!dropdown)}>Home</Link>
          <Link to="projects" onClick={() => setDropdown(!dropdown)}>Projects</Link>
          <Link to="skills" onClick={() => setDropdown(!dropdown)}>Skills</Link>
          <Link to="experience" onClick={() => setDropdown(!dropdown)}>Experience</Link>
          <Link to="contact" onClick={() => setDropdown(!dropdown)}>Contact</Link>
        </div>

    </div>

  )
}
