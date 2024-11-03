import { Link } from "react-router-dom"

import "./Nav.css"

const Nav = () => {
  return (
    <>
      <div class="pos-f-t">
        <nav class="navbar navbar-dark bg-dark float-right">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
        <div class="collapse" id="navbarToggleExternalContent">
          <div className="menuBackground">
            <ul>
                <li>
                    <Link to="/" className="navLink" >Home</Link>
                </li>
                <li>
                    <Link to="/notepad" className="navLink" >Notepad</Link>
                </li>
                <li>
                    <Link to="/tasklist" className="navLink" >Task List</Link>
                </li>
                <li>
                    <Link to="/calendar" className="navLink" >Calendar</Link>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
