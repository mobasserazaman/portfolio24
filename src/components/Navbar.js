import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/portfolio24">Home</Link>
      <Link to="/portfolio24/projects">Projects</Link>
      <Link to="/portfolio24/skills">Skills</Link>
      <Link to="/portfolio24/experience">Experience</Link>
      <Link to="/portfolio24/contact">Contact</Link>
    </div>
  )
}
