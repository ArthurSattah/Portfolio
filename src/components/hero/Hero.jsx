import React from 'react'
import './hero.css'
const Hero = () => {
  return (
    <section className="containerHero">
        <div className="leftHero">
            <p className="leftHeroTitle">
                Hello , I'm Arthur
            </p>
            <p className="leftHeroDesc">
                I am a software engineer with a lot of skills, Reach out 
                if you would like to know more about me !
            </p>
            <div className="contact">
                <a href="mailto:arthursattah@gmail.com">Contact Me</a>
            </div>
        </div>
        <div className="rightHero">
            <img src={require("../../assets/hero/ArthurSattah.jpg")} alt="personal-image" />
        </div>
        <div className="topHero"></div>
        <div className="downHero"></div>
    </section>
  )
}

export default Hero
