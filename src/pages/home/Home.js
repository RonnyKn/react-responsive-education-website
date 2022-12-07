import "./Home.css"
import React from "react"
import { Link } from "react-router-dom"
import HeaderSVG from "../../assets/img/header.svg"

const Home = () => {
  return (
    <header>
      <div className="container home-container">
        <div className="home-header-left">
          <h1>Grow your skills to advance your carrer path</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            consectetur illo, iure repellendus quia laborum quo ullam
            necessitatibus atque accusamus.
          </p>
          <button className="btn btn-primary">
            <Link to="/course">Get Started!</Link>
          </button>
        </div>
        <div className="home-header-right">
          <img src={HeaderSVG} alt="headerSVG" />
        </div>
      </div>
    </header>
  )
}

export default Home
