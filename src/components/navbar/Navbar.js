import "./Navbar.css"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { GoThreeBars } from "react-icons/go"
import { MdOutlineClose } from "react-icons/md"

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false)
  const scrollTop = () => {
    window.scroll(0, 0)
  }

  return (
    <nav>
      <div className="container nav-container">
        <div className="nav-logo">
          <Link to="/">RONS EDU</Link>
        </div>
        <div className="nav-menu">
          <button
            className="nav-menu-btn"
            onClick={() => setIsNavShowing(!isNavShowing)}
          >
            {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
          </button>
          <ul
            className={`nav-menu-links ${
              isNavShowing ? "nav-show" : "nav-hide"
            }`}
          >
            <li onClick={scrollTop}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={scrollTop}>
              <Link to="/about">About</Link>
            </li>
            <li onClick={scrollTop}>
              <Link to="/course">Course</Link>
            </li>
            <li onClick={scrollTop}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
