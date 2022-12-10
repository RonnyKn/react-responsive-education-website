import "./Footer.css"

import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer className="container footer-container">
        <div className="footer-logo">
          <h4>RONNYKN</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            voluptates accusantium obcaecati.
          </p>
        </div>
        <div className="footer-permalinks">
          <h4>Permalink</h4>
          <ul className="footer-permalink">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/course">Course</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-privacy">
          <h4>Privacy</h4>
          <ul>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Terms and conditions</a>
            </li>
            <li>
              <a href="/">Refund policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-contactus">
          <h4>Contact Us</h4>
          <ul>
            <li>+6285642108006</li>
            <li>ronnykurniawn@gmail.com</li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer
