import "./SingleTestimonial.css"
import React from "react"

const SingleTestimonial = ({ testi }) => {
  return (
    <div className="single-testimonial">
      <div className="testimonial-img">
        <img src={testi?.pict} alt="image_testimonial" />
      </div>
      <h5 className="testimonial-name">{testi?.name}</h5>
      <small className="testimonial-grade">{testi?.grade}</small>
      <div className="testimonial-message">
        <p>{testi?.message}</p>
      </div>
    </div>
  )
}

export default SingleTestimonial
