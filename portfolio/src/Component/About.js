import React from 'react'
import About_css from './About.css'

const About = () => {
  return (
    <div id="about">
        <div class="about">

          <div class="container card_data">
            <h3 class=" fw-bold text-center about_me pt-5">About Me</h3>
            <p class="text-light text-center pt-2">Turning ideas into interactive web apps — I’m a MERN Stack Developer Fresher ready to grow, learn, and create amazing digital experiences. I work with MongoDB, Express.js, React.js, and Node.js to create user-friendly frontends and powerful backends.</p>
            <div class="container ">
              <div class="row fw-bold text-light">
                <div class="col mt-3 ">
              <div class="card mb-3 mt-2">
                 <div class="card-header education internship ">Internship</div>
                     <div class="card-body education">
                  <h5 class="card-title">MERN - Full Stack development</h5>
                    <p class="card-text">App Innovation technologies Coimbatore.</p>
                     </div>
                     </div>
                     </div>
                      <div class="col mt-3">
              <div class="card  mb-2 mt-2">
                 <div class="card-header  education">Education</div>
                     <div class="card-body education">
                  <h5 class="card-title">B.E in Electronics and Communication </h5>
                    <p class="card-text">Jai Shriram Engineering College Tiruppur.</p>
                     </div>
                     </div>
                     </div>
                     </div>
                     </div>
        </div>
        </div>
        
    </div>
  )
}

export default About