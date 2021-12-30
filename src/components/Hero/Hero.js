import React from 'react'
import '../Hero/Hero.css';


const Hero = ( { imageSrc }) => {
    return (
        <>
        <section className="hero">
            <img src={imageSrc} alt="Learn" className="hero_image" /> 
            {/* <h1 className="hero_title">Learn To Make Progress</h1>   */}
        </section>
        </>
    )
}

export default Hero
