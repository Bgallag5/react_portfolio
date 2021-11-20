import React from "react";
import PortfolioCard from "./PortfolioCard";

export default function Portfolio() {
  return (
    <div className="cards container">
      <h1>Check Out My Projects...</h1>
      <div className="section container m-1 is-centered is-small">
        <div className="container py-5 columns is-centered card">
          <h2
            className="subtitle m-4"
            style={{ position: "absolute", left: "10px", top: "0" }}
          >
            Featured
          </h2>
          <PortfolioCard
            src={require("../assets/images/moviebox.png").default}
            label="Movie Box"
            text={`Movie Box is a full CRUD movie database application. Built with: JavaScript, Node, Express, MySQL2, CSS, Handlebars, bcrypt, and Bootstrap. `}
            href="https://fierce-plateau-48530.herokuapp.com/movies/login"
            code="https://github.com/Bgallag5/Movie_Box"
          />
          <PortfolioCard
            src={require("../assets/images/pocket-trader.png").default}
            label="Pocket Trader"
            text={"A full MERN stack + GraphQL application. Users can sign up to build their own team, and check out the leaderboards to see the best teams. Built with: MongoDB, Express, React, Node, and GraphQL"}
            href="https://pocket-trader.herokuapp.com/"
            code="https://github.com/Bgallag5/PokeTrader"
          />
        </div>

        <div className="section is-flex-wrap-wrap columns is-centered">
          <PortfolioCard
            src={require("../assets/images/cooking.png").default}
            label="Cooking with React"
            text="A simple recipe list app made with React. "
            href=""
            code='https://github.com/Bgallag5/CookingwithReact'
          />
          <PortfolioCard
            src={require("../assets/images/findFresh.png").default}
            label="Find Fresh"
            text="FreshFind is an app that allows users to search for local farmers markets. It was built with the Spoontastic API, USDA Farmers Market API, and Google Maps. "
            href="https://bgallag5.github.io/Find-nFresh/"
            code="https://github.com/Bgallag5/Find-nFresh"
          />
          <PortfolioCard
            src={require("../assets/images/weatherapp.png").default}
            label="Weather Forecast App"
            text="An API weather app that presents the current and 5 day forcast for whatever city you search for, or select from your search history. Built with Javascript and Bootstrap. "
            href="https://bgallag5.github.io/WeatherForecast/"
            code=''
          />

          <PortfolioCard
            src={require("../assets/images/piggame.png").default}
            label="Pig Game"
            text="A simple front-end DOM, two-player dice game made with JavaSript, HTML, and CSS."
            href="https://github.com/Bgallag5/Pig_Game"
            code=''
          />
          <PortfolioCard
            src={require("../assets/images/piggame.png").default}
            label="Pig Game"
            text="A simple front-end DOM, two-player dice game made with JavaSript, HTML, and CSS."
            href="https://github.com/Bgallag5/Pig_Game"
            code=''
          />
          <PortfolioCard
            src={require("../assets/images/piggame.png").default}
            label="Pig Game"
            text="A simple front-end DOM, two-player dice game made with JavaSript, HTML, and CSS."
            href="https://github.com/Bgallag5/Pig_Game"
            code=''
          />
        </div>
      </div>
    </div>
  );
}

//img screenshots of my portfloio projects
//links to my deployed projects
// page spacing, show featured and the rest different sizes
//https://github.com/Bgallag5/Movie_Box
//https://github.com/Bgallag5/Find-nFresh
// https://github.com/Bgallag5/WeatherForecast
//https://github.com/Bgallag5/Pig_Game
//https://github.com/Bgallag5/CookingwithReact
