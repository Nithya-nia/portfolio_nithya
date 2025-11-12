import React from 'react'
import Services_bg from '../Images/puple_bg.webp'
import Services_css from './Services.css'

const Services = () => {
  return (
    <div id="services">
       <div class="Services_background " 
              style={{
          backgroundImage:`url(${Services_bg})`,
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
      
        }}
        >
        <div class="container">
            <h3 class="text-center fw-bold pt-5 my_services ">My Services</h3>
          </div>
          <div class="container card-data h-25">
            <div class="row row-cols-1 fw-bold  services_color row-cols-md-2 mt-5  ">
                <div class="col ">
                    <div class="card mb-3 ">
                    <div class="card-header services">Frontend Development</div>
                    <div class="card-body services">
                     <h5 class="card-title">Building responsive and interactive user interfaces using modern frontend technologies like React and Redux</h5>
                    <ul>
                    <li>Responsive Design</li>
                     <li>UI/UX Implementation</li>
                      <li>State Management</li>
                       <li>Performance optimization</li>
                       </ul>
                    </div>
                    </div>
                </div>

                 <div class="col">
                    <div class="card  mb-3">
                    <div class="card-header services">Backend Development</div>
                    <div class="card-body services">
                     <h5 class="card-title">Creating robust server-side applications using Node.js, Express, and other backend technologies.</h5>
                    <ul>
                      <li>API Development</li>
                      <li>Authentication</li>
                      <li>Server Configuration </li>
                      <li>Performance optimization</li>
                      </ul>
                    </div>
                    </div>
                </div>

                

                 <div class="col ">
                    <div class="card mb-3 ">
                    <div class="card-header services">Database Design</div>
                    <div class="card-body services">
                     <h5 class="card-title">Designing and optimizing database schemas and queries for MongoDB and other database systems.</h5>
                    <ul>
                    <li>Schema Design</li>
                     <li>query Optimization</li>
                      <li>Data modeling</li>
                       <li>Database management</li>
                       </ul>
                    </div>
                    </div>
                </div>

                 <div class="col">
                    <div class="card  mb-3">
                    <div class="card-header services">Full Stack Development</div>
                    <div class="card-body services">
                     <h5 class="card-title">End-to-end development of web applications, from designing responsive UIs to building robust backends.</h5>
                     <ul>
                      <li>MERN stack</li>
                      <li>Full Application Lifecycle</li>
                      <li> Deployment</li>
                      <li>Maintenance</li>
                      </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Services
                     