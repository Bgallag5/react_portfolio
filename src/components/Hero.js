import React from 'react'

export default function Hero() {

    const image = require('../assets/images/AvatarMaker.svg').default;


    return (
        <div className='hero-container'>

            <div className='about-section'>
            <img src = {image} alt = 'Ben' id="about-picture"/>
            <p className="hero-text-top">Hello!! My name is Ben and I like to code.</p>
            </div>
        
        </div>
    )
}
