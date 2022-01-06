import React from 'react'
import '../Hero/Hero.css';


const Hero = ( { imageSrc }) => {
    return (
        <>
        <section className="hero">
            <img src={imageSrc} alt="Learn" className="hero_image" /> 
        </section>
        </>
    )
}

export default Hero
