import "./Home.css"
import React from "react"
import { Link } from "react-router-dom"
import HeaderSVG from "../../assets/img/header.svg"
import { categories, popularCourse, qa } from "../../assets/data/Data"
import SingleCategory from "../../components/singleCategory/SingleCategory"
import SingleCourse from "../../components/singleCourse/SingleCourse"
import SingleFaqs from "../../components/singleFaqs/SingleFaqs"

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
      <section className="container home-category">
        <div className="home-category-left">
          <h1>Categories</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,
            adipisci! Tempora doloremque nihil dicta aspernatur! Fugiat veniam
            libero maxime et.
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>
        <article className="home-category-right">
          {categories.map((category, idx) => (
            <SingleCategory category={category} key={idx} />
          ))}
        </article>
      </section>
      <section className="home-popcourse">
        <div className="container">
          <h1 className="home-popular-course">Our Popular Course</h1>
          <article className="home-popcourse-content">
            {popularCourse.map((course, idx) => (
              <SingleCourse course={course} key={idx} />
            ))}
          </article>
        </div>
      </section>
      <section className="container">
        <h1 className="faqs-h1">Frequently Ask Questions</h1>
        <article className="faqs">
          {qa.map((qna, idx) => (
            <SingleFaqs qna={qna} key={idx} />
          ))}
        </article>
      </section>
    </>
  )
}

export default Home
