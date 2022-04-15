import React, {useRef} from "react";
import resume from "../../assets/materials/BG_resume_Jan_2022.pdf";

export default function ResumePage() {
  const phoneRef = useRef();

  const revealNumber = (e) => {
    console.log(e.target);
    e.target.classList.remove('blur');
  }

  return (
    <div>
      <div className="resume-section">
        <div className="about-me">
          <h1>About Me</h1>
          <p>
            Hi! My name is Benjamin Gallagher and I am a fullstack web developer
            with a passion for making things work. As a developer, I get the
            most satisfaction from tackling unexpected or challenging problems
            that force me to expand my developer's toolkit. In November of 2021 I completed the George Washington University Full-Stack Developer Bootcamp, graduating with an 'A' as 
            one of the top students in the class. Since then I have continued to learn on my own, completing Udemy courses on React and Node. I've done most of my
            work using the MERN stack (MongoDB, Express, React, Node), but I
            have also built projects with other technologies including MySQL, GraphQL,
            Handlebars, and PUG.
          </p>
        </div>

        <div className="technologies-contact-section">
          <h1>Technologies</h1>
          <h1>Contact and Resume</h1>
          <div className="technologies">
            <div className="tech-list">
              <p>JavaScript</p>
              <p>React</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>Bulma</p>
              <p>Google Fonts/Icons</p>
            </div>
            <div className="tech-list">
              <p>Express</p>
              <p>Node</p>
              <p>MySQL</p>
              <p>GraphQL</p>
              <p>API's</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="resume-field">
              <h2>Resume:</h2>
              <a href={resume} target="_blank" rel="noreferrer">
                <p>
                  resume.pdf
                  <i className="fas fa-file" style={{ fontSize: "20px" }}></i>
                </p>
              </a>
            </div>
            <div className="resume-field">
              <h2>Email:</h2>
              <a href= "mailto:bgallag5@gmail.com">bgallag5@gmail.com</a>
            </div>
            <div className="resume-field">
              <h2>Phone:</h2>
              <p ref={phoneRef} onClick={revealNumber} title="Click to reveal" className="blur phone-number">703-258-9324</p>
            </div>
            <div className="social-links">
              <a
                href="https://github.com/Bgallag5"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github" />
                <p>GitHub</p>
              </a>
              <a
                href="https://www.linkedin.com/in/benjamin-g-2b16281b1/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin" />
                <p>LinkedIn</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="footer-link-items">
<a
  href="https://github.com/Bgallag5"
  target="_blank"
  rel="noreferrer"
>
  <h2>Github</h2>
  <i className="fab fa-github"></i>
</a>
</div> */
}
