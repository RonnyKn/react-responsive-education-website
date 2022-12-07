import "./Home.css"
import React from "react"
import { Link } from "react-router-dom"
import HeaderSVG from "../../assets/img/header.svg"
import { categories } from "../../assets/data/Data"
import SingleCategory from "../../components/singleCategory/SingleCategory"

const Home = () => {
  return (
    <>
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
      <section className="home-category">
        <div className="home-category-left">
          <h1>Categories</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,
            adipisci! Tempora doloremque nihil dicta aspernatur! Fugiat veniam
            libero maxime et.
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>
        <div className="home-category-right">
          {categories.map((category, idx) => (
            <section className="single-category" key={idx}>
              <SingleCategory category={category} />
            </section>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
