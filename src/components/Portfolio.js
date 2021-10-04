import React from 'react'
import PortfolioCard from './PortfolioCard'

export default function Portfolio() {
    return (
    <div className = 'cards'>
    <h1>Boom! Check Me out</h1>
    <div className="cards__container">
    <div className="cards__items">
        <ul>
            <PortfolioCard 
            src={require ("../assets/images/img-2.jpeg").default}
            label="React Website"
            text="A website created with React and Redux"
            href='https://github.com/Bgallag5/CookingwithReact'
            />
            <PortfolioCard 
            src={require ("../assets/images/img-6.jpeg").default}
            label="RunBuddy Website"
            text="A website created with basic html and css, nothing fancy here."
            href='https://github.com/Bgallag5/CookingwithReact'
            />
            <PortfolioCard 
            src={require ("../assets/images/img-6.jpeg").default}
            label="RunBuddy Website"
            text="A website created with basic html and css, nothing fancy here."
            href='https://github.com/Bgallag5/CookingwithReact'
            />
            <PortfolioCard 
            src={require ("../assets/images/img-6.jpeg").default}
            label="RunBuddy Website"
            text="A website created with basic html and css, nothing fancy here."
            href='https://github.com/Bgallag5/CookingwithReact'
            />
            <PortfolioCard 
            src={require ("../assets/images/img-6.jpeg").default}
            label="RunBuddy Website"
            text="A website created with basic html and css, nothing fancy here."
            href='https://github.com/Bgallag5/CookingwithReact'
            />
        </ul>
    </div>
    </div>
    </div>

    )
}

