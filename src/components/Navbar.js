import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {

  const {activePage, setActivePage, pages} = props;

  console.log(activePage);

  useEffect(() => {
    document.title = activePage;
  }, [activePage])


  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* <h3>Ben Gallagher</h3> */}
          <ul className="nav-menu">
            {pages.map((page) => (
            <li className="nav-item ">
            <Link 
            to={page.path}
            className={"nav-links" }
            key={page.name}
            onClick={setActivePage(page.name)}
            >
              {page.name}
            </Link>
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