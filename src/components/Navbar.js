import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="projects">Projects</Link>
      <Link to="skills">Skills</Link>
      <Link to="experience">Experience</Link>
      <Link to="contact">Contact</Link>
    </div>
  )
}
