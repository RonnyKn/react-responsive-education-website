import "./SingleTeam.css"
import React from "react"

const SingleTeam = ({ tm }) => {
  return (
    <div className="single-team">
      <div className="content-img">
        <img src={tm?.tmImg} alt="" />
      </div>
      <h5>{tm?.name}</h5>
      <small>{tm?.major}</small>
    </div>
  )
}

export default SingleTeam
