import React from 'react'
import { useInView } from 'react-intersection-observer';
import { GoMarkGithub } from "react-icons/go";

const ProjectItems = ({ imgSrc, label, deployedLink, gitHubLink }) => {

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.4,
    });

    return (
        <>
            <div className={inView ? "cards-item card--zoom" : "cards-item"} ref={ref}>
                <a href={deployedLink} className="cards-item-link">
                    <a href={gitHubLink}><GoMarkGithub size={40}/></a>
                    <figure className="cards-item-pic-wrap" key={label}>
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
