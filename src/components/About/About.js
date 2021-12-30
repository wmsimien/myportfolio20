import React from 'react'
import '../About/About.css';



const About = ({imageSrc}) => {

    const renderContent = () => {
        return (
            <>
                <h1 className="about_title">About Me</h1>
                <img src={imageSrc} alt="Selfie" className="about_image" /> 
                <div className="about_content">
                    <p className="about_bio">
                        Over 20 years of professional coding experience with client-server 
                        applications running on Oracle and/or SQL server backbones with
                        an eagerness to learn and grow in web developement.
                        Friendly, a planner, chart-maker, inspiring, 
                        logical, resourceful, creative, and excellent thinker 
                        is what I bring to a company.
                    </p>    
                </div>
                
            </>
        );   
    };

    return (
        <div className="about">
            {renderContent()}
        </div>
    )
}

export default About
