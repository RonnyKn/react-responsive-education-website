import React from "react"
import "./SingleCourse.css"

const SingleCourse = ({ course }) => {
  return (
    <div className="single-course">
      <div className="single-course-img">
        <img src={course.popIMG} alt="popular course" />
      </div>
      <h5>{course.name}</h5>
      <p>{course.detail}</p>
      <button className="btn btn-primary">Learn More</button>
    </div>
  )
}

export default SingleCourse
