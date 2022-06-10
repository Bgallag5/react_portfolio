import React, { useEffect, useState } from "react";
import Portfolio from "../Portfolio";
import Project from "../Project";
import Hero from "../Hero";

export default function PortfolioPage() {
  // const [projects, setProjects] = useState(null)

  //translucent navbar on scroll
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const projects = document.querySelectorAll(".project__section");
    const p1Coords = projects[0].getBoundingClientRect();
    //translucent navbar on scroll
    window.addEventListener("scroll", function () {
      if (window.scrollY >= p1Coords.top / 1.25) {
        navbar.classList.add("nav-translucent");
      } else if (window.scrollY < p1Coords.top / 1.25) {
        navbar.classList.remove("nav-translucent");
      }
    });

    function displaySection(entries, observer) {
      const [entry] = entries;
      //check that the section is intersecting then reveal section
      if (!entry.isIntersecting) return;
      entry?.target.classList.remove("section--hidden");
      //remove observer
      observer.unobserve(entry.target);
    }

    //delcare intersectionObserver -> on trigger call displaySection()
    const Observer = new IntersectionObserver(displaySection, {
      root: null,
      threshold: 0.1,
    });

    projects.forEach((project) => {
      Observer.observe(project);
    });
  }, []);

  //Project Data
  const Meals2Go = {
    title: "Meals 2 Go",
    imgSrc: "meals2goalt.png",
    deployed: "https://meals2go.herokuapp.com/",
    code: "https://github.com/Bgallag5/Meals-2-Go",
    description: 'A familiar feeling food ordering application. Users can add to, and edit their carts, and "place orders" on the checkout page.',
    quip: "React Food Order App",
    technologies: "React, React-Router, SASS, Mantine, EmailJS, Google Fonts/Icons",
    className: "",
  };
  const NatoursLanding = {
    title: "Natours Landing Page",
    imgSrc: "natoursLanding.png",
    deployed: "https://bgallag5.github.io/Advanced_SASS/",
    code: "https://github.com/Bgallag5/Advanced_SASS",
    description:
    "The Natours landing page is a stylish, fully responsive webpage that advertises the Natours website. This project allowed me to thoroughly practice many different CSS/SASS concepts, including: Responsive/Mobile design, BEM, Animations, Pseudo Elements, Mixins, and Lazy Loading. ",
    quip: "Try it on your phone!",
    technologies: "HTML, SASS, CSS, JavaScript",
    className: "img--right",
  };
  const Natours = {
    title: "Natours",
    imgSrc: "natours--img.png",
    deployed: "https://bg-natours.herokuapp.com/",
    code: "https://github.com/Bgallag5/Natours",
    description:
    "Natours is a fullstack MERN application designed for browsing and booking vacations! Natours users can create an account to browse our diverse vacation tour offers. ",
    quip: "Life changing experiences, just clicks away.",
    technologies: "React, MongoDB, Express, Node",
  };
  const Trillo = {
    title: "Trillo Hotels",
    imgSrc: "trillo.png",
    deployed: "https://bg-trillo-hotels.herokuapp.com/",
    code: "https://github.com/Bgallag5/Trillo_Hotels",
    description: "A hotel booking page that displays photos, reviews, and general information about each hotel. ",
    quip: "Hotel? Trillo!",
    className: "img--right",
    technologies: "React, HTML, SASS, CSS, JavaScript",
  };
  const Stocks = {
    title: "Stock Alert",
    imgSrc: "stock--img.png",
    deployed: "https://bgstock-alert.herokuapp.com/",
    code: "https://github.com/Bgallag5/Stock_Alert",
    description:
      `Stock alert my own recreation of the website https://stockalarm.io/. I build this project to practice recreating great looking websites as fast as possible in React. Compare it to the original to see how accurate my recreation is (with some upgrades included).`,
    quip: "Trades EXACTLY when you need them",
    technologies: "React, JavaScript, CSS, Google Fonts/Icons",
  };
  const Pokemon = {
    title: "Pocket Trader",
    imgSrc: "pocket-trader.png",
    deployed: "https://pocket-trader.herokuapp.com/",
    code: "https://github.com/Bgallag5/pocketTrader",
    description:
      "A full MERN stack + GraphQL application. Users can sign up to build their own team, and check out the leaderboards to see the best teams. Built with: MongoDB, Express, React, Node, and GraphQL.",
    quip: "A Pokemon team building game",
    className: "img--right",
    technologies: "React, JavaScript, GraphQL, Express, Node.js, Bulma, CSS",
  };
  const Bankist = {
    title: "Bankist",
    imgSrc: "bankist--img.png",
    deployed: "https://bankist--app.herokuapp.com/",
    code: "https://github.com/Bgallag5/Bankist",
    description:
      "Need a new bank? Well keep looking because this is only a webpage. Bankist is a front end landing page for a fake bank with a concentration on simplicity, readability, and style.",
    quip: "When banking meets minimalism.",
    technologies: "React, JavaScript, CSS",
  };
  const Forkify = {
    title: "Forkify",
    imgSrc: "forkify--img.png",
    deployed: "https://forkify-app-bg818.herokuapp.com/",
    code: "https://github.com/Bgallag5/Recipe_Finder",
    description:
      "Forkify is a recipe sharing application build with React, JavaScript, CSS, and the Forkify API. Search for recipies by ingredient name, bookmark your favorite recipes for later, and upload your own recipes for other users to try out.",
    quip: "Find it. Make it.",
    className: "img--right",
    technologies: "React, JavaScript, CSS, Material UI, Forkify API",
  };
  const MovieBox = {
    title: "Movie Box",
    imgSrc: "moviebox.png",
    deployed: "https://fierce-plateau-48530.herokuapp.com/movies/login",
    code: "https://github.com/Bgallag5/Movie_Box",
    description: `Movie Box is a full CRUD movie database application. The API is built with MySQL, Express, and Node. Users can create a profile, login, search movies, and leave reviews.`,
    quip: "Just like Netflix, but none of the movie are real!",
    technologies:
      "JavaScript, Node, Express, MySQL2, CSS, Handlebars, bcrypt, and Bootstrap",
  };
  const FindFresh = {
    title: "Find Fresh",
    imgSrc: "findFresh.png",
    deployed: "https://bgallag5.github.io/Find-nFresh/",
    code: "https://github.com/Bgallag5/Find-nFresh",
    description:
      "FreshFind is an app that allows users to search for local farmers markets. It was built with the Spoontastic API, USDA Farmers Market API, and Google Maps.",
    quip: "Farm to table. From home.",
    className: "img--right",
    technologies: "React, JavaScript, CSS, FindFresh API",
  };

  return (
    <div className="portfolio__container">
      <Hero />
      <Project props={NatoursLanding} />
      <Project props={Natours} />
      <Project props={Trillo} />
      <Project props={Stocks} />
      <Project props={Pokemon} />
      <Project props={Bankist} />
      <Project props={Forkify} />
      <Project props={MovieBox} />
      <Project props={FindFresh} />
    </div>
  );
}
