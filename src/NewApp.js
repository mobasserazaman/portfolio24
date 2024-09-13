import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function NewApp() {
    return (
        <div className='newapp'>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Profile/>} />
                    <Route path="/projects" element={<Projects/>} />
                    <Route path="/skills" element={<Skills/>} />
                    <Route path="/experience" element={<Experience/>} />
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
            </Router>
        </div>
    )
}
