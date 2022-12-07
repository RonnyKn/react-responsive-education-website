import React from "react"

const SingleCategory = ({ category }) => {
  return (
    <section className="single-category">
      <div className="single-category-icon">{category?.icon}</div>
      <h3>{category?.name}</h3>
      <p>{category?.detail}</p>
    </section>
  )
}

export default SingleCategory
