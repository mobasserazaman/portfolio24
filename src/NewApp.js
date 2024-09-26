import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { createContext } from 'react';


export const ThemeContext = createContext(false);

export default function NewApp() {

    

    const [darkMode, setDarkMode] = useState(false);
    console.log(darkMode)
    return (
        <ThemeContext.Provider value={darkMode}>
            <div className='newapp' style={darkMode? {color:'white', backgroundColor: 'black'} : {}}>
                <Router basename='/portfolio24'>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Profile changeTheme={setDarkMode} />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="skills" element={<Skills />} />
                        <Route path="experience" element={<Experience />} />
                        <Route path="contact" element={<Contact />} />
                    </Routes>
                </Router>
            </div >
        </ThemeContext.Provider>
    )
}




