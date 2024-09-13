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
                    <Route path="/portfolio24" element={<Profile/>} />
                    <Route path="/portfolio24/projects" element={<Projects/>} />
                    <Route path="/portfolio24/skills" element={<Skills/>} />
                    <Route path="/portfolio24/experience" element={<Experience/>} />
                    <Route path="/portfolio24/contact" element={<Contact/>} />
                </Routes>
            </Router>
        </div>
    )
}
