import React from 'react'
import '../Resume/Resume.css';

const Resume = () => {

    const renderContent = () => {
        return (
            <>
                <h1 className="resume-title">Resume</h1>
                <div className="resume-item">
                <span>Download my</span> <a href="#">resume</a>
                {/* <h2 className="resume-subtitle">Front End Proficiencies</h2> */}
                    <ul>
                       <h4>Front-End Proficiencies</h4>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>JQuery</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                                <li>Template Languages</li>
                                    <ul>
                                        <li>HandleBars</li>
                                        <li>EJS</li>
                                    </ul>
                            </ul>
                        <h4>Backend-End Proficiencies</h4>
                            <ul>
                                <li>REST API</li>
                                <li>Oracle</li>
                                <li>MongoDB</li>
                                <li>Node</li>
                                <li>Express</li>
                                <li>MySQL</li>
                                    <ul>
                                        <li>Sequelize</li>
                                    </ul>
                                <li></li>
                            </ul>
                    </ul>    
                </div>
                
            </>
        );   
    };

    return (
        <div>
            {renderContent()}
            
        </div>
    )
}

export default Resume
