import React, { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import AboutPage from "./components/pages/AboutPage";
import PortfolioPage from "./components/pages/PortfolioPage";
import Footer from "./components/Footer";
import "./assets/css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ResumePage from "./components/Resume";
import ScrollToTop from "./utils/ScrollToTop";
// import ContactPage from "./components/pages/ContactPage";

export const AppContext = React.createContext();

function App() {
  const [pages] = useState([
    // { name: "About Me", path: "/", id: 1 },
    { name: "Portfolio", path: "/portfolio", id: 2 },
    { name: "Resume", path: "/resume", id: 3 }
  ]);
  const [activePage, setActivePage] = useState("");

  //reload last active tab
  useEffect(() => {
    const lastTab = JSON.parse(localStorage.getItem('last-tab'));
    lastTab ? setActivePage(lastTab) : setActivePage('Portfolio')
  }, []);

  //monitor page changes
  useEffect(() => {
    document.title = activePage;
    localStorage.setItem('last-tab', JSON.stringify(activePage))
  }, [activePage]);

  const globalVars = {
    activePage,
    setActivePage,
    pages
  };



  return (
    <AppContext.Provider value={globalVars}>
      <Router>
        <ScrollToTop />
        <Navbar/>
        <Switch>
          <Route
            path="/"
            exact
            component={AboutPage}
          />
          <Route path="/portfolio" exact component={PortfolioPage} />
          <Route path="/resume" exact component={ResumePage} />
        </Switch>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
}

export default App;


