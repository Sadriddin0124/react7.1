import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = ({setNextPage}) => {
  return (
    <nav className="navbar">
      <div className="navbar__items">
        <ul className="navbar__list">
          <li>
            <Link className="navbar__link" to="/" onClick={()=>setNextPage(1)}>
              Posts
            </Link>
          </li>
          <li>
            <Link to="/comments" className="navbar__link" onClick={()=>setNextPage(1)}>Comments</Link>
          </li>
          <li>
            <Link to='/albums' className="navbar__link" onClick={()=>setNextPage(1)}>Albums</Link>

          </li>
          <li>
            <Link to="/photos" className="navbar__link" onClick={()=>setNextPage(1)}>Photos</Link>

          </li>
          <li>
            <Link to="/todos" className="navbar__link" onClick={()=>setNextPage(1)}>Todos</Link>

          </li>
          <li>
            <Link className="navbar__link" to="/users" onClick={()=>setNextPage(1)}>
              Users
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
