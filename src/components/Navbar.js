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
