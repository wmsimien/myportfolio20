import React from 'react'
import ProjectItems from '../Portfolio/ProjectItems';
import '../Portfolio/Project.css';
import { GoMarkGithub } from "react-icons/go";


const Project = ( { projects }) => {

    return (
        <>
            <h1 className="project-heading">Portfolio</h1>
            <div className="cards">      
                {projects.map((project) => {
                return (           
                    <div className="cards-container" key={project.title}>
                        <div>
                            <div>
                                <ProjectItems
                                    imgSrc={project.imageSrc}
                                    label={project.title}
                                    deployedLink={project.deployedLink}
                                    gitHubLink={project.gitHubLink}
                                />
                            </div>
                        </div>
                    </div>   
                )
                })}     
            </div>
        </>
    )
}

export default Project
