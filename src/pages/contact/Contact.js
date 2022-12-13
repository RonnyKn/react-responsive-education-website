import "./Contact.css"
import React from "react"
import ContactSVG from "../../assets/img/contact.svg"
import {
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaPhoneSquareAlt,
  FaGlobeAsia,
} from "react-icons/fa"
import { FiMail } from "react-icons/fi"

const Contact = () => {
  return (
    <section className="contact">
      <div className="container contact-container">
        <aside className="contact-aside">
          <div className="aside-img">
            <img src={ContactSVG} alt="contactSVG" />
          </div>
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            optio illum praesentium!
          </p>
          <ul className="contact-details">
            <li>
              <em>
                <FaPhoneSquareAlt />
              </em>
              <h5>+62085642108006</h5>
            </li>
            <li>
              <em>
                <FiMail />
              </em>
              <h5>ronnykurniawn@gmail.comm</h5>
            </li>
            <li>
              <em>
                <FaGlobeAsia />
              </em>
              <h5>Yogyakarta, Indonesia</h5>
            </li>
          </ul>
          <ul className="contact-socials">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitterSquare />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </aside>
        <form action="submit" className="contact-right">
          <input
            type="text"
            name="user_name"
            placeholder="Your Full Name.."
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email ex: wawan@gmail.com"
            required
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Write Your Message.."
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
        <div className="contact-right"></div>
      </div>
    </section>
  )
}

export default Contact
