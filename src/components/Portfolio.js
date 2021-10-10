import React from 'react'
import PortfolioCard from './PortfolioCard'

export default function Portfolio() {
    return (
    <div className = 'cards'>
    <h1>Check Out My Projects...</h1>
    <div className="cards__container">
    <div className="cards__items">
        <ul className = 'cards-wrapper'>
            <PortfolioCard 
            src={require ("../assets/images/moviebox.png").default}
            label="Movie Box"
            text="Movie Box is a full CRUD movie database application that allows users to: login, sort, search, and save the movies in our databse. Users can also read each other's reviews and leave their own. Built with: JavaScript, Node.js, Express.js, MySQL2, CSS, Handlebars, dotenv, bcrypt, lodash, and Bootstrap. "
            href='https://github.com/Bgallag5/CookingwithReact'
            />
            <PortfolioCard 
            src={require ("../assets/images/cooking.png").default}
            label="Cooking with React"
            text="A simple recipe list app made with React. "
            href='https://github.com/Bgallag5/CookingwithReact'
            />
            <PortfolioCard 
            src={require ("../assets/images/findFresh.png").default}
            label="Find Fresh"
            text="FreshFind is an app that allows users to search for local farmers markets and then pair the fresh ingredients they buy with healthy recipes. It was built with the Spoontastic API, USDA Farmers Market API, and Google Maps."
            href='https://github.com/Bgallag5/CookingwithReact'
            />
            <PortfolioCard 
            src={require ("../assets/images/weatherapp.png").default}
            label="Weather Forecast App"
            text="An API weather app that presents the current and 5 day forcast for whatever city you search for, or select from your search history. Built with Javascript and Bootstrap. "
            href='https://github.com/Bgallag5/CookingwithReact'
            />
            <PortfolioCard 
            src={require ("../assets/images/piggame.png").default}
            label="Pig Game"
            text="A simple front-end DOM, two-player dice game made with JavaSript, HTML, and CSS."
            href='https://github.com/Bgallag5/CookingwithReact'
            />
        </ul>
    </div>
    </div>
    </div>

    )
}



//img screenshots of my portfloio projects 
//links to my deployed projects
// page spacing, show featured and the rest different sizes 
//https://github.com/Bgallag5/Movie_Box
//https://github.com/Bgallag5/Find-nFresh
// https://github.com/Bgallag5/WeatherForecast
//https://github.com/Bgallag5/Pig_Game
//https://github.com/Bgallag5/CookingwithReact
