import React,{useState} from 'react'
import skills_css from './Skills.css'

const Skills = () => {
 

  const [expanded, setExpanded] = useState(false);

  const skills = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
  ];

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <>
    <div id="skills">
    <div className="skills-wrapper">
      
      <div 
        className={`circle-container ${expanded ? "expanded" : ""}`}
        onClick={toggleExpand}
      >
         <h3 class="text-center fw-bold  my_skill"> My Skills</h3>
        
        <div className="center-circle ">
          {expanded ? "Close" : "My Skills"}
        </div>
        

        {skills.map((skill, i) => {
          const angle = (i / skills.length) * 2 * Math.PI;
          const radius = 120;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={skill}
              className="skill"
              style={
                expanded
                  ? { transform: `translate(${x}px, ${y}px) scale(1)`, opacity: 1 }
                  : { transform: "translate(-50%, -50%) scale(0)", opacity: 0 }
              }
            >
              {skill}
            </div>
          );
        })}
      </div>
    </div>
    </div>
    </>
  );
};




export default Skills