import React from "react";
import '../styles/projects.css'
import proj1img from '../images/todo.png'

function Projects({ darkMode }) {
    return (
        <div className="projects">
            <h1 className={darkMode ? "projects--heading--dark" : "projects--heading--light"}>PROJECTS</h1>
            <h3 className={darkMode ? "projects--subhead--dark" : "projects--subhead--light"}>List project</h3>
            <div className={darkMode ? "project1--dark" : "project1--light"}>
                <a href="https://ajaykrshna.github.io/React-app/"><img src={proj1img} alt="todolist" /></a>
                <h1><a href="https://ajaykrshna.github.io/React-app/">To do list app</a></h1>
                <p>Hello World! Project</p>
                <div className="card--tags--vert">
                    
                    <div className="card--tag--management">Management</div>
                    <div className="card--tag--presentation">Presentation</div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
