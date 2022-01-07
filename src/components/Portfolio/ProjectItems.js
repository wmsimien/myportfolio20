import React from 'react'
import { GoMarkGithub } from "react-icons/go";

const ProjectItems = ({ imgSrc, label, deployedLink, gitHubLink }) => {

    return (
        <>
            <div className="cards-item">
                <a className="cards-item-anchor" href={gitHubLink}><GoMarkGithub size={40}/></a>
                <a href={deployedLink} className="cards-item-link">        
                    <figure className="cards-item-pic-wrap" data-category={label}>
                        <img src={imgSrc} className="cards-item-img" />
                    </figure>
                    <div className="cards-item-info">
                        <h5 className="cards-item-text">{label}</h5>
                    </div>
                </a>
            </div>          
        </>
    )
}

export default ProjectItems
