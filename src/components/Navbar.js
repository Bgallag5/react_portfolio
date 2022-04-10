import React, { useEffect, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AppContext } from "../App";

export default function Navbar() {

  const { activePage, setActivePage, pages } = useContext(AppContext);


  return (
    <>
      <nav className="navbar">
        <h2>
          <Link to="/" style={{ color: "whitesmoke" }}>
            Ben Gallagher
          </Link>
        </h2>
        <div className="navbar-container">
          <ul className="nav-menu">
            {pages.map((page) => (
              <li className="nav-item" key={page.id}>
                <NavLink
                  to={page.path}
                  className={
                    activePage === page.name
                      ? "nav-links nav-links-active"
                      : "nav-links"
                  }
                  onClick={() => setActivePage(page.name)}
                >
                  {page.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

// {/* <>
// <nav className="navbar">
//   <div className="navbar-container">
//     {/* <h3>Ben Gallagher</h3> */}
//     <ul className="nav-menu">
//       <li className="nav-item ">
//         <Link to="/"
//         className="nav-links"
//         // onClick={setActivePage(pages[0])}
//         >
//           About Me
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/portfolio"
//           className="nav-links"
//           onClick={setActivePage()}
//         >
//           Portfolio
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/resume"
//           className="nav-links"
//           // onClick={setActivePage(pages[3])}
//         >
//           Resume
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link
//           to="/contact-page"
//           className="nav-links"
//           // onClick={setActivePage(pages[4])}
//         >
//           Contact Me
//         </Link>
//       </li>
//     </ul>
//   </div>
// </nav>
// </> */}
