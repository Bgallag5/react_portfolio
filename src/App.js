import React from 'react';
import Navbar from './components/Navbar';
import AboutPage from './components/pages/AboutPage';
import PortfolioPage from './components/pages/PortfolioPage';
import Footer from './components/Footer';
import "./assets/css/App.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
    <Navbar />
    <video id='hero-video' src={require ("./assets/images/video-1.mp4").default} autoPlay loop muted></video>

    <Switch>
      <Route path ='/' exact component={AboutPage} />
      <Route path ='/portfolio' component={PortfolioPage} />
    </Switch>
    <Footer />
    </Router>
   
    </>
  );
}

export default App;










// Notes
//Hero === About Section
//Sections: About me, Portfolio, Contact, Resume 
//single page app- components are reloaded individually 
//Navbar: nav links, active is highlighted
//About Me: default section loaded; photo and short bio
//Portfolio: 6 projects previewed, link to the deployed projects 
//Contact: name, email, (info) - and contact form? ; error message when the user leaves an...`  
// input feild blank ; email is validated and error message upon leaving input field 
//Resume: downloadable pdf - short "preview" snippit of resume ie. list technologies, skills 
//Footer: email, github, LinkedIn

//useState on navbar active tab
//finish Card components 
//make a button component 

