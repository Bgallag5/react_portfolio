import React from "react";
import PortfolioCard from "./PortfolioCard";

export default function Portfolio() {
  return (
    <div className="cards">
      <h1>Check Out My Projects...</h1>
      <div className="section container is-small">
        <div className="container columns is-centered card">
          <h2
            className="subtitle m-4"
            style={{ position: "absolute", left: "10px" }}
          >
            Featured
          </h2>
          <PortfolioCard
            src={require("../assets/images/moviebox.png").default}
            label="Movie Box"
            text="Movie Box is a full CRUD movie database application. Built with: JavaScript, Node.js, Express.js, MySQL2, CSS, Handlebars, dotenv, bcrypt, lodash, and Bootstrap. "
            href="https://fierce-plateau-48530.herokuapp.com/movies/login"
          />
          <PortfolioCard
            src={require("../assets/images/pocket-trader.png").default}
            label="Pocket Trader"
            text="A full MERN stack + GraphQL application. Users can sign up to build their own team, and check out the leaderboards for best teams."
            href="https://pocket-traders.herokuapp.com/"
          />
        </div>
        <div className="contianer columns is-centered m-4">
          <PortfolioCard
            src={require("../assets/images/cooking.png").default}
            label="Cooking with React"
            text="A simple recipe list app made with React. "
            href="https://github.com/Bgallag5/CookingwithReact"
          />
          <PortfolioCard
            src={require("../assets/images/findFresh.png").default}
            label="Find Fresh"
            text="FreshFind is an app that allows users to search for local farmers markets and then pair the fresh ingredients they buy with healthy recipes. It was built with the Spoontastic API, USDA Farmers Market API, and Google Maps."
            href="https://bgallag5.github.io/Find-nFresh/"
          />
          <PortfolioCard
            src={require("../assets/images/weatherapp.png").default}
            label="Weather Forecast App"
            text="An API weather app that presents the current and 5 day forcast for whatever city you search for, or select from your search history. Built with Javascript and Bootstrap. "
            href="https://bgallag5.github.io/WeatherForecast/"
          />
        </div>
        <div className="contianer columns is-centered m-4">
          <PortfolioCard
            src={require("../assets/images/piggame.png").default}
            label="Pig Game"
            text="A simple front-end DOM, two-player dice game made with JavaSript, HTML, and CSS."
            href="https://github.com/Bgallag5/Pig_Game"
          />
          <PortfolioCard
            src={require("../assets/images/piggame.png").default}
            label="Pig Game"
            text="A simple front-end DOM, two-player dice game made with JavaSript, HTML, and CSS."
            href="https://github.com/Bgallag5/Pig_Game"
          />
          <PortfolioCard
            src={require("../assets/images/piggame.png").default}
            label="Pig Game"
            text="A simple front-end DOM, two-player dice game made with JavaSript, HTML, and CSS."
            href="https://github.com/Bgallag5/Pig_Game"
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
