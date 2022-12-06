import "./Navbar.css"
import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <div className="container nav-container">
        <div className="nav-logo">RONS EDU</div>
        <div className="nav-navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/course">Course</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
