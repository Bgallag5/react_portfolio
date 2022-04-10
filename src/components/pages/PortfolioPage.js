import React, {useEffect} from "react";
import Portfolio from "../Portfolio";
import Project from "../Project";
import Hero from "../Hero";

export default function PortfolioPage() {

  //translucent navbar on scroll
  useEffect(() => {
    const navbar = document.querySelector('.navbar')
    const coords = document.querySelectorAll(".project__section");
    const p1Coords = coords[0].getBoundingClientRect();
    window.addEventListener('scroll', function(){
      if (window.scrollY >= p1Coords.top / 1.25){
        navbar.classList.add('nav-translucent')
      } else if (window.scrollY < p1Coords.top / 1.25){
        navbar.classList.remove('nav-translucent')
      }
    })
  }, [])

  //Project Data
  const Pokemon = {
    title: "Pocket Trader",
    imgSrc: "pocket-trader.png",
    deployed: "https://pocket-trader.herokuapp.com/",
    code: "https://github.com/Bgallag5/pocketTrader",
    description:
      "A full MERN stack + GraphQL application. Users can sign up to build their own team, and check out the leaderboards to see the best teams. Built with: MongoDB, Express, React, Node, and GraphQL",
    quip: "A Pokemon team building game",
    className: "img--right",
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
  };

  const MovieBox = {
    title: "Movie Box",
    imgSrc: "moviebox.png",
    deployed: "https://fierce-plateau-48530.herokuapp.com/movies/login",
    code: "https://github.com/Bgallag5/Movie_Box",
    description: `Movie Box is a full CRUD movie database application. Built with: JavaScript, Node, Express, MySQL2, CSS, Handlebars, bcrypt, and Bootstrap.`,
    quip: "Just like Netflix, but none of the movie are real!",
  };
    const Forkify = {
        title: 'Forkify',
        imgSrc: 'forkify--img.png',
        deployed: 'https://forkify-app-bg818.herokuapp.com/',
        code: 'https://github.com/Bgallag5/Recipe_Finder',
        description: 'Forkify is a recipe sharing application build with React, JavaScript, CSS, and the Forkify API. Search for recipies by ingredient name, bookmark your favorite recipes for later, and upload your own recipes for other users to try out.',
        quip: 'Find it. Make it.'
    }
    const Stocks = {
        title: "Stock Alert",
        imgSrc: "stock--img.png",
        deployed: 'https://bgstock-alert.herokuapp.com/',
        code: 'https://github.com/Bgallag5/Stock_Alert',
        description: "Stock Alert is a front end landing page for a stock alert app. ",
        quip: "Trades EXACTLY when you need them",
    }
    const Bankist = {
        title: "Bankist",
        imgSrc: "bankist--img.png",
        deployed: "https://bankist--app.herokuapp.com/",
        code: "https://github.com/Bgallag5/Bankist",
        description: "Need a new bank? Well keep looking because this is only a webpage. Bankist is a front end landing page for a fake bank with a concentration on simplicity, readablity, and style.",
        quip: "When banking meets minimalism.",
        className: "img--right",
    }
  //   const WidgetWorld = {
  //       title:
  //       imgSrc:
  //       deployed:
  //       code:
  //       description:
  //       quip:
  //   }
  //   const Natours = {
  //       title:
  //       imgSrc:
  //       deployed:
  //       code:
  //       description:
  //       quip:
  //   }

  return (
    <div className="portfolio__container">
      <Hero />
      <Project props={Stocks} />
      <Project props={Pokemon} />
      <Project props={Forkify} />
      <Project props={Bankist} />
      <Project props={MovieBox} />
      <Project props={FindFresh} />
    </div>
  );
}
