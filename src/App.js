import React, {useState, useRef} from 'react';
import Navbar from './components/Navbar';
import AboutPage from './components/pages/AboutPage';
import PortfolioPage from './components/pages/PortfolioPage';
import Footer from './components/Footer';
import "./assets/css/App.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ContactPage from './components/pages/ContactPage';
import ResumePage from './components/Resume';
import ScrollToTop from './utils/ScrollToTop';


function App() {

  const [pages] = useState([
    {name: 'About Me', path: '/', id: 1}, 
    {name: 'Portfolio', path: '/portfolio', id: 2}, 
    {name: 'Resume', path: '/resume', id: 3}, 
    {name: 'Contact Me', path: '/contact-page', id: 4}
  ]) 

  const [activePage, setActivePage] = useState(pages[0].name);
  console.log('ACTIVE PAGE');
  console.log(activePage);

const videoRef = useRef();
const setPlayBackSpeed = () => {
  videoRef.current.playbackRate = .55;
}



  return (
    <>
    <Router>
    <ScrollToTop />
    <Navbar 
    activePage={activePage} 
    setActivePage={setActivePage} 
    pages={pages} 
    />
    <video 
    id='hero-video' 
    src={require ("./assets/images/video-2.mp4").default} 
    ref={videoRef} 
    onCanPlay={() => setPlayBackSpeed()} 
    autoPlay 
    loop 
    muted
    >
    </video>

    <Switch>
      <Route path ='/' exact component={AboutPage} />
      <Route path ='/portfolio' exact component={PortfolioPage} />
      <Route path ='/contact-page' exact component={ContactPage} />
      <Route path ='/resume' exact component={ResumePage} />
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

//////Notes//////

