import React from 'react'
import './about.css'
const About = () => {
  return (
    <section className="containerAbout" id="about">
      <h1 className="titleAbout">
        About
      </h1>
      <div className="contentAbout">
        <div className="leftAbout">
          <img src={require("../../assets/about/man.png")} alt="Hacker-image" />
        </div>
        <ul className="itemsAbout">
          <li className='itemAbout'>
            <img src={require("../../assets/about/cursorIcon.png")} alt="cursorIcon" />
            <div className="descriptionItemAbout">
              <div className="titleItemAbout">
                Problem Solver
              </div>
              <div className="descItemAbout">
                I'm an expert problem solver who has participated in many problem solving competitions.
              </div>
            </div>
          </li>
          <li className='itemAbout'>
            <img src={require("../../assets/about/cursorIcon.png")} alt="cursorIcon" />
            <div className="descriptionItemAbout">
              <div className="titleItemAbout">

                Frontend Developer
              </div>
              <div className="descItemAbout">

                I'm a front-end developer with 2 years of experience using React.Js
              </div>
            </div>
          </li>
          <li className='itemAbout'>
            <img src={require("../../assets/about/cursorIcon.png")} alt="cursorIcon" />
            <div className="descriptionItemAbout">
              <div className="titleItemAbout">

                C++ Developer
              </div>
              <div className="descItemAbout">

                I have been using C++ for 5 years during programming competitions.
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About
