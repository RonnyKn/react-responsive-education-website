import React, { useState } from "react"
import "./SingleFaqs.css"
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md"
const SingleFaqs = ({ qna }) => {
  const [isExpand, setIsExpand] = useState(true)
  return (
    <>
      <div className="single-faqs" onClick={() => setIsExpand(!isExpand)}>
        <button>
          {isExpand ? <MdOutlineExpandMore /> : <MdOutlineExpandLess />}
        </button>
        <div className="single-faqs-content">
          <h5>{qna?.question}</h5>
          <p className={isExpand ? "hide-answer" : ""}>{qna?.answer}</p>
        </div>
      </div>
    </>
  )
}

export default SingleFaqs
