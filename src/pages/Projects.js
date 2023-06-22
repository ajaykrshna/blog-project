import React from "react";
import '../styles/projects.css'
import proj1img from '../images/todo.png'

function Projects() {
    return (
        <div className="projects">
            <h1 className="projects--heading">PROJECTS</h1>
            <h3 className="projects--subhead">List project</h3>
            <div className="project1">
                <img src={proj1img} />
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
