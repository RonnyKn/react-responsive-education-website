import "./About.css"
import React from "react"
import aboutIMG from "../../assets/img/about achievements.svg"
import { IoBookOutline } from "react-icons/io5"
import { MdOutlinePeopleAlt } from "react-icons/md"
import { FaAward } from "react-icons/fa"
import { team } from "../../assets/data/Data"
import SingleTeam from "../../components/singleTeam/SingleTeam"

const About = () => {
  return (
    <>
      <header>
        <section className="container about-container">
          <div className="about-left">
            <img src={aboutIMG} alt="aboutIMG" />
          </div>
          <div className="about-right">
            <h1>Achievements</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              accusamus reprehenderit architecto iure atque sapiente quibusdam
              suscipit minus enim. Veniam reprehenderit doloribus tempora
              voluptatibus repellendus, temporibus at fugiat assumenda eius?
            </p>
            <div className="about-right-cards">
              <article className="about-right-card">
                <div className="card-icon danger">
                  <IoBookOutline />
                </div>
                <h4>450+</h4>
                <small>Courses</small>
              </article>
              <article className="about-right-card">
                <div className="card-icon succes">
                  <MdOutlinePeopleAlt />
                </div>
                <h4>80.000+</h4>
                <small>Students</small>
              </article>
              <article className="about-right-card">
                <div className="card-icon primary">
                  <FaAward />
                </div>
                <h4>30+</h4>
                <small>Awards</small>
              </article>
            </div>
          </div>
        </section>
      </header>
      <section className="container">
        <h1 className="team-title">Meet Our Team</h1>
        <article className="about-team">
          {team.map((tm, idx) => (
            <SingleTeam tm={tm} key={idx} />
          ))}
        </article>
      </section>
    </>
  )
}

export default About
