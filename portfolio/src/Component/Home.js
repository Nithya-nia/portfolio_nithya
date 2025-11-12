import React from 'react'
import Home_css from './Home.css'
import bg_home from '../Images/puple_bg.webp'
import profile_img from '../Images/profile_img.jpg'
const Home = () => {
  return (
    <>
    <div id="Home">
    {/* <div class="home"> */}
        <div class="background " 
        style={{
    backgroundImage:`url(${bg_home})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',

  }}
    >
        <div class="intro">
            <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <p class="hello">Hello , I'm</p>
                    <h1 class="fw-bold text-light">NITHYA S</h1>
                    <p class="MSD">MERN Stack Developer</p>
                    <p class="text-light">I’m a passionate MERN Stack Developer specializing in building scalable, high-performance web applications</p>
                    <p class="text-light">I love turning ideas into seamless user experiences using MongoDB, Express, React, and Node.js.</p>
                    <a href="#projects" class=" button-view_portfolio" type="button">View Projects</a>
                    <a href="#contact" class="button-contact_me" type="button">Contact Me</a>
                </div>
                <div class="col-md-6">
                        <img src={profile_img} class="profile_img" height="220px" width="200px"/>
                </div>
            </div>
            <div class=" icons d-flex gap-3 mt-4 ">
                <a href="https://github.com/nithya-nia"><i class="fa-brands fa-github github"></i></a>
                <a href="https://www.linkedin.com/in/nithya-nia/"><i class="fa-brands fa-linkedin linkedin"></i></a>
                <a href="mailto:imnithyania@gmail.com"><i class="fa-solid fa-envelope envelope"></i></a>
            </div>


        </div>
        </div>
        </div>
</div>
    </>
  )
}

export default Home