import React from 'react';
import resume from '../assets/resume.pdf';

export default function Resume() {
    return (
        <div className='resume-page-container'>
            <div className="resume-info-container">
                <div className='resume-page-box proficiencies'>
                    <h2>Proficiencies</h2>
                    <div className='skills-container'>
                    <span className='skills-list'>
                    <h3>Front End</h3>
                        <ul>
                            <li>React</li>
                            <li>CSS</li>
                            <li>HTML</li>
                            <li>jQuery</li>
                            <li>Bulma/Bootsrap</li>
                            <li>Handlebars</li>
                        </ul>
                    </span>
                    <span className='skills-list'>
                        <h3>Backend</h3>
                        <ul>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MongoDB/mongoose</li>
                            <li>API's</li>
                        </ul>
                    </span>
                    <span className='skills-list'>
                        <h3>Foundation</h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>Git</li>
                            <li>JSON</li>
                        </ul>
                    </span>
                    </div>
                </div>
            <div className='resume-page-box resume-pdf'>
                    <a href={resume} target='_blank' rel='noreferrer'><p>resume.pdf</p></a>
            </div>
            </div>
        </div>
    )
}
