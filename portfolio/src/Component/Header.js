import React from 'react'
import Header_css from '../Component/Header.css'
import pdf from '../Images/Nithya S - FULL STACK_RESUME.pdf'

const Header = () => {
  return (
    <>
    <div class="container navbar">
    <nav class="navbar navbar-expand-lg  fixed-top bg-body-tertiary">
  <div class="container-fluid">
   <div>
    <a class="navbar-brand N" href="#"> NS</a>
    <a class="navbar-brand fw-bold" href="#">Nithya S</a>
    </div>
     <button class="navbar-toggler border-light border border-0 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "> </span>
    </button>
    <div class="collapse navbar-collapse pages" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#Home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#skills">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
        <li class="nav-item">
         <a  href={pdf} target="_blank" class="link_resume"> <button type="button" class="nav-link resume">Resume</button></a>
        </li>
        </ul>
        
     
    </div>
  </div>
</nav>
</div>
    </>
  )
}

export default Header