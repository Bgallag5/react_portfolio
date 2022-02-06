import React from "react";
import resume from "../assets/materials/BG_resume_Jan_2022.pdf";

export default function Resume() {
  return (
    <div className="resume-page-container">
      <div className="resume-info-container">
        <div className="container m-5 resume-page-box proficiencies">
          <h2>Proficiencies</h2>
          <div className="skills-container">
            <span className="skills-list">
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
            <span className="skills-list">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>API's</li>
                <li>MongoDB/mongoose</li>
                <li>GraphQL</li>
              </ul>
            </span>
            <span className="skills-list">
              <h3>Foundation</h3>
              <ul>
                <li>JavaScript</li>
                <li>Git</li>
                <li>JSON</li>
              </ul>
            </span>
          </div>
        </div>
        <div className="container m-5 resume-page-box resume-pdf">
          <p>
            Hi! My name is Benjamin Gallagher and I am a back end web developer
            with a passion for making things work. As a developer, I get the most
            satisfaction from tackling unexpected or challenging problems that
            force me to expand my developer's toolkit. I've done most of my work
            using the MERN stack (MongoDB, Express, React, Node), but I have
            also built projects with GraphQL and MySQL.{" "}
          </p>
          <a href={resume} target="_blank" rel="noreferrer">
            <p style={{marginTop: '10%', marginBottom: '1%'}}>resume.pdf <i className="fas fa-file" style={{fontSize: '20px'}}></i></p>
          </a>
          <ul>
              <li>703-258-9324</li>
              <li>bgallag5@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
