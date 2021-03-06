import React, { useEffect, useContext } from "react";
import { AppContext } from "../App";
import { NavLink } from "react-router-dom";

export default function Hero() {
  const { activePage, setActivePage } = useContext(AppContext);
  const image = require("../assets/images/AvatarMaker.svg").default;

  //smooth scroll to first project
  const handleScroll = function () {
    const navBar = document.querySelector(".navbar").getBoundingClientRect();
    const p1Coords = document
      .querySelectorAll(".project__section")[0]
      .getBoundingClientRect();
    window.scrollTo({
      left: p1Coords.left + window.scrollX,
      //subtract nav height from scroll distance
      top: p1Coords.top + window.scrollY -  (navBar.height * 2),
      behavior: "smooth",
    });
  };

  //on mount, wait 1 sec then remove animation class names
  useEffect(() => {
    const scrollLink = document.querySelector(".view--projects");
    setTimeout(() => {
        scrollLink.classList.remove('animate__bounce')
    }, 1000)
  }, [])

  return (
    <div className="hero-container">
      <div className="about-section">
        <img src={image} alt="Ben" id="about-picture" />
        <div className="container">
          <p>Hello! My name is Ben and I like to code.</p>
          <ul className="mx-5 small-links">
            <li>
              <NavLink
                onClick={() => setActivePage("Resume")}
                className="small-link"
                to={'/resume'}
                
              >
                Contact Me or View my Resume
                <i
                  style={{ verticalAlign: "middle", fontSize: "20px" }}
                  className="fas fa-angle-double-right"
                ></i>
              </NavLink>
            </li>
            <li>
              <h2 onClick={handleScroll} className="view--projects small-link animate__animated animate__bounce">
                View my Projects
                <i
                  style={{ verticalAlign: "middle", fontSize: "20px" }}
                  className="fas fa-angle-double-down"
                ></i>
              </h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
