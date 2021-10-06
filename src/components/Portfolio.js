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
            text="A website created with React and Redux"
            href='https://github.com/Bgallag5/CookingwithReact'
            />
            <PortfolioCard 
            src={require ("../assets/images/cooking.png").default}
            label="Cooking with React"
            text="A website created with basic html and css, nothing fancy here."
            href='https://github.com/Bgallag5/CookingwithReact'
            />
            <PortfolioCard 
            src={require ("../assets/images/findFresh.png").default}
            label="Find Fresh"
            text="A website created with basic html and css, nothing fancy here."
            href='https://github.com/Bgallag5/CookingwithReact'
            />
            <PortfolioCard 
            src={require ("../assets/images/weatherapp.png").default}
            label="Weather Forecast App"
            text="A website created with basic html and css, nothing fancy here."
            href='https://github.com/Bgallag5/CookingwithReact'
            />
            <PortfolioCard 
            src={require ("../assets/images/piggame.png").default}
            label="Pig Game"
            text="A website created with basic html and css, nothing fancy here."
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
