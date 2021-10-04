import React from 'react';
import Portfolio from '../Portfolio';


export default function PortfolioPage() {
    return (
        <>       
            <video id='hero-video' src={require ("../../assets/images/video-1.mp4").default} autoPlay loop muted></video>

            <Portfolio /> 
        </>
    )
}
