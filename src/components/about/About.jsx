import React, { useState } from 'react'
import './about.css'
import ImageComponent from '../imageComponent/ImageComponent'
const About = () => {
  const [select, setSelect] = useState("exp");
  return (
    <section className="containerAbout" id="about">
      <div className="titleAbout">
        About
      </div>
      <div className="contentAbout">
        <div className="leftAbout">
          <div className='leftAboutImage'>
            <ImageComponent
              alt="Hacker-image"
              src={require("../../assets/about/man.png")}
              smallSrc={require("../../assets/about/man-small.png")} />
          </div>
          <img />
        </div>
        <div className="rightAbout">
          <div className="topRightAbout">
            <div className={`selectAbout ${select === "exp" ? "goodSelect" : "bruh"}`} onClick={() => setSelect("exp")}>
              Experiance
            </div>
            <div className={`selectAbout ${select === "edu" ? "goodSelect" : "bruh"}`} onClick={() => setSelect("edu")}>
              Education
            </div>
          </div>
          <div className="bottomRightAbout">

            <div className={` ${select === "exp" ? "bottomRightAboutSelected" : "bruhBottom"}`}>
              I have two years of experience in frontend development using React Js and I've created a lot of responsive web pages.
              <br />
              I mastered data structures, algorithms and problem solving and I also have 5 years of experience using C++ and have taught it in bootcamps.
            </div>

            <div className={` ${select === "edu" ? "bottomRightAboutSelected" : "bruhBottom"}`}>
              I have a software engineering degree from Al-Baath University in Homs, Syria, with a very good grade .
              <br />
              I also received a certificate of thanks and appreciation from the university presidency as a result of my excellence in local and regional programming competitions.
            </div>

          </div>
        </div>


        {/* <ul className="itemsAbout">
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
        </ul> */}
      </div>
    </section>
  )
}

export default About
