import React from 'react'
import Projects_css from './Projects.css'
import Leadgen from '../Images/LeanGen.jpeg'
import DelightFood from '../Images/Delight_food.jpeg'
import popeyes from '../Images/Popeyes.jpeg'
import Ideabox from '../Images/ideabox.jpeg'


const Projects = () => { 
  return (
    <>
    <div id="projects">
    <div class="projects">
        <div class="projects_bg">
             <h3 class="text-center fw-bold pt-5 my_skill"> My Projects</h3>
       
        <div class="container project_img mt-4">
            <div class="row row-cols-1 row-cols-md-3">
                 <div class="col">
                    <div class="perfumy">
                   <a href=""> <img src={Ideabox} alt="" class="image-front absolute w-full h-auto object-cover"  height="300px" width="300px"/></a>
                </div>
                </div>
                <div class="col">
                    <div class="wrapper">
                    <img src={Leadgen} alt="" class="image-front absolute w-full h-auto object-cover"  height="300px" width="300px"/>
                </div>
                </div>
                 <div class="col">
                    <div class="delight_food">
                    <img src={DelightFood} alt="" class="image-front absolute w-full h-auto object-cover"  height="300px" width="300px"/>
                </div>
                </div>
                <div class="col mt-2">
                    <div class="popeyes">
                    <img src={popeyes} alt="" class="image-front absolute w-full h-auto object-cover"  height="300px" width="300px"/>
                </div>
                </div>
                </div>
                </div>

              
            </div>
            </div>
            </div>
</>
  )
}

export default Projects