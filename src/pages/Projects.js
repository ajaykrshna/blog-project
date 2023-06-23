import React from "react";
import '../styles/projects.css'
import proj1img from '../images/todo.png'

function Projects({ darkMode }) {
    return (
        <div className="projects">
            <h1 className={darkMode ? "projects--heading--dark" : "projects--heading--light"}>PROJECTS</h1>
            <h3 className={darkMode ? "projects--subhead--dark" : "projects--subhead--light"}>List project</h3>
            <div className={darkMode ? "project1--dark" : "project1--light"}>
                <img src={proj1img} alt="todolist"/>
                <h1>To do list app</h1>
                <p>Just for Fun</p>
                <div className="project--tags">
                    <div className="project--tag">Leadership</div>
                    <div className="project--tag">Management</div>
                    <div className="project--tag">Presentation</div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
