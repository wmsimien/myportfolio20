import React from 'react'
import '../Footer/Footer.css';
import { SiGithub } from "react-icons/si";



const Footer = () => {
    return (
        <footer>
            <div>
                <a href="https://github.com/wmsimien" 
                    target="_blank" 
                    rel="noreferrer">
                    <SiGithub size={40}/>
                </a>             
            </div>
        </footer>
    )
}

export default Footer
