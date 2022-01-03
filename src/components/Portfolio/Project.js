import React from 'react'
import ProjectItems from '../Portfolio/ProjectItems';
import '../Portfolio/Project.css';
import { useInView } from 'react-intersection-observer';
import { GoMarkGithub } from "react-icons/go";


const Project = ( { projects }) => {

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.4,
    });

    return (
        <div className="cards">
            <h1 className="project-heading">Portfolio</h1>
            {projects.map((project) => {
            return (
                <div className="cards-container">
                    <div className="cards-wrapper">
                        <div className="cards-items">
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
    )
}

export default Project
