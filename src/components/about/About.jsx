import React, { useState } from 'react'
import './about.css'
import ImageComponent from '../imageComponent/ImageComponent'
import AnimationFromLeft from '../framerMotion/animationFromLeft/AnimationFromLeft';
import AnimationFromRight from '../framerMotion/animationFromRight/AnimationFromRight';
const About = () => {
  const [select, setSelect] = useState("exp");
  return (
    <section className="containerAbout" id="about">
      <AnimationFromLeft>
        <div className="titleAbout">
          About
        </div>
      </AnimationFromLeft>

      <div className="contentAbout">
        <div className="leftAbout">
          <div className='leftAboutImage'>
            <AnimationFromLeft>
              <ImageComponent
                alt="Hacker-image"
                src={require("../../assets/about/man.png")}
                smallSrc={require("../../assets/about/man-small.png")} />
            </AnimationFromLeft>
          </div>
          <img />
        </div>
        <div className="rightAbout">
          <AnimationFromRight>
            <div className="topRightAbout">
              <div className={`selectAbout ${select === "exp" ? "goodSelect" : "bruh"}`} onClick={() => setSelect("exp")}>
                Experiance
              </div>
              <div className={`selectAbout ${select === "edu" ? "goodSelect" : "bruh"}`} onClick={() => setSelect("edu")}>
                Education
              </div>
            </div>
          </AnimationFromRight>
          <AnimationFromRight>
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
          </AnimationFromRight>
        </div>
      </div>
    </section>
  )
}

export default About
