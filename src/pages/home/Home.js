import "./Home.css"
import React from "react"
import { Link } from "react-router-dom"
import HeaderSVG from "../../assets/img/header.svg"
import {
  categories,
  popularCourse,
  qa,
  testimonials,
} from "../../assets/data/Data"
import SingleCategory from "../../components/singleCategory/SingleCategory"
import SingleCourse from "../../components/singleCourse/SingleCourse"
import SingleFaqs from "../../components/singleFaqs/SingleFaqs"
import SingleTestimonial from "../../components/singleTestimonial/SingleTestimonial"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { Swiper, SwiperSlide } from "swiper/react"

import { A11y, Navigation, Pagination, Scrollbar } from "swiper"

const Home = () => {
  return (
    <>
      <header>
        <div className="container home-container">
          <div className="home-header-left">
            <h1>Grow your skills to advance your carrer path</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              consectetur illo, iure repellendus quia laborum quo ullam
              necessitatibus atque accusamus.
            </p>
            <button className="btn btn-primary">
              <Link to="/course">Get Started!</Link>
            </button>
          </div>
          <div className="home-header-right">
            <img src={HeaderSVG} alt="headerSVG" />
          </div>
        </div>
      </header>
      <section className="container home-category">
        <div className="home-category-left">
          <h1>Categories</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,
            adipisci! Tempora doloremque nihil dicta aspernatur! Fugiat veniam
            libero maxime et.
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>
        <article className="home-category-right">
          {categories.map((category, idx) => (
            <SingleCategory category={category} key={idx} />
          ))}
        </article>
      </section>
      <section className="home-popcourse">
        <div className="container">
          <h1 className="home-popular-course">Our Popular Course</h1>
          <article className="home-popcourse-content">
            {popularCourse.map((course, idx) => (
              <SingleCourse course={course} key={idx} />
            ))}
          </article>
        </div>
      </section>
      <section className="container">
        <h1 className="faqs-h1">Frequently Ask Questions</h1>
        <article className="faqs">
          {qa.map((qna, idx) => (
            <SingleFaqs qna={qna} key={idx} />
          ))}
        </article>
      </section>
      <section className="home-testimonial">
        <div className="container ">
          <h1 className="testimonial-title">Student Testimonials</h1>
          <div className="testimonial-swiper">
            <Swiper
              spaceBetween={50}
              // style={{ margin: "0 auto" }}
              slidesPerView={2}
              navigation={true}
              grabCursor={true}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              modules={[Navigation, Pagination, A11y]}
              breakpoints={{
                // when window width is >= 640px
                300: {
                  width: 480,
                  slidesPerView: 1,
                },
                // when window width is >= 640px
                640: {
                  width: 640,
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                978: {
                  width: 978,
                  slidesPerView: 3,
                },
              }}
            >
              {testimonials.map((testi, idx) => (
                <SwiperSlide className="testimonial" key={idx}>
                  <SingleTestimonial testi={testi} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
