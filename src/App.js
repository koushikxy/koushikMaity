import React from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom'

import PreLoader from './components/PreLoader'

import Home from './pages/Home'
import Skill from './pages/Skill'
import Project from './pages/Project'
import Experience from './pages/Experience'
import Certificate from './pages/Certificate'

const App = () => {
  return (
    <>
      <PreLoader />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Skill' element={<Skill />} />
        <Route exact path='/Project' element={<Project />} />
        <Route exact path='/Experience' element={<Experience />} />
        <Route exact path='/Certificate' element={<Certificate />} />
      </Routes>
    </>
  )
};

export default App