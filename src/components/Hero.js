import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../App';

export default function Hero() {

    const [activePage, setActivePage] = useContext(AppContext);

    // useEffect(() => {
    //     setActivePage()
    // }, [activePage])

    const image = require('../assets/images/AvatarMaker.svg').default;



    return (
        <div className='hero-container'>

            <div className='about-section'>
            <img src = {image} alt = 'Ben' id="about-picture"/>
            <div className='container'>
            <p>Hello! My name is Ben and I like to code.</p>
            <ul className='mx-5 small-links'>
            <li><Link to='/resume' onClick={() => setActivePage('Resume')}  className='small-link'>Contact Me or View my Resume<i style={{verticalAlign: 'middle', fontSize: '20px'}} className="fas fa-angle-double-right"></i></Link></li>
            <li><Link to='/portfolio' onClick={() => setActivePage('Portfolio')} className='small-link'>View my Projects<i style={{verticalAlign: 'middle', fontSize: '20px'}} className="fas fa-angle-double-right"></i></Link></li>
            </ul>
            </div>
            </div>
        
        </div>
    )
}
