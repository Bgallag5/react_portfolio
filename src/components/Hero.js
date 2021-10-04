import React from 'react'

export default function Hero() {

    const image = require('../assets/images/headshot.jpeg').default;


    return (
        <div className='hero-container'>
            <p className="hero-text-top">Hello! My name is Ben and I make websites.</p>
            <br/>

            <div className='about-section'>
            <img src = {image} alt = 'Ben' id="about-picture"/>
            <p>My name is Ben Gallagher and I like to make websites pls hire me RIGHT NOW!!!!
            This is the second p tag that will appear in my about me section. This will probably be somewhat
            long, as I will be describing all I have done over the last few months during this program.
            </p>
        </div>
        
        </div>
    )
}
