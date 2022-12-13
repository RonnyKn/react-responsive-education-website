import "./Course.css"
import React from "react"
import { allcourse } from "../../assets/data/Data"
import SingleCourse from "../../components/singleCourse/SingleCourse"

const Course = () => {
  return (
    <section className="course-container">
      <div className="container">
        <h1 className="course-title">Our Awesome Course</h1>
        <article className="course">
          {allcourse.map((course, idx) => (
            <SingleCourse course={course} key={idx} />
          ))}
        </article>
      </div>
    </section>
  )
}

export default Course
