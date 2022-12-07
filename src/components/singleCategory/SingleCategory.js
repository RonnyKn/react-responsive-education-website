import React from "react"
import "./SingleCategory.css"

const SingleCategory = ({ category }) => {
  return (
    <div className="single-category">
      <div className="single-category-icon">{category?.icon}</div>
      <h5>{category?.name}</h5>
      <p>{category?.detail}</p>
    </div>
  )
}

export default SingleCategory
