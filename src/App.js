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

function App() {
  const [pages] = useState([
    { name: "About Me", path: "/", id: 1 },
    { name: "Portfolio", path: "/portfolio", id: 2 },
    { name: "Resume", path: "/resume", id: 3 },
    // { name: "Contact Me", path: "/contact-page", id: 4 },
  ]);

  const [activePage, setActivePage] = useState("About Me");
  console.log("ACTIVE PAGE");
  console.log(activePage);

  // const videoRef = useRef();
  // const setPlayBackSpeed = () => {
  //   videoRef.current.playbackRate = 0.55;
  // };


  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar
          activePage={activePage}
          setActivePage={setActivePage}
          pages={pages}
        />
        {/* <video
          id="hero-video"
          src={require("./assets/images/video-2.mp4").default}
          ref={videoRef}
          onCanPlay={() => setPlayBackSpeed()}
          autoPlay
          loop
          muted
        ></video> */}
        {/* <img src={require("./assets/images/img-9.jpeg").default} /> */}

        <Switch>
          <Route
            path="/"
            exact
            component={AboutPage}
            activePage={activePage}
            setActivePage={setActivePage}
          />
          <Route path="/portfolio" exact component={PortfolioPage} />
          <Route path="/resume" exact component={ResumePage} />
          {/* <Route path="/contact-page" exact component={ContactPage} /> */}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
