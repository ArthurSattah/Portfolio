import React from 'react'
import './hero.css'
import AnimationFromLeft from '../framerMotion/animationFromLeft/AnimationFromLeft';
import AnimationFromRight from '../framerMotion/animationFromRight/AnimationFromRight';
import ImageComponent from '../imageComponent/ImageComponent'
const Hero = () => {
    return (
        <section className="containerHero">
            <div className="leftHero">
                <AnimationFromLeft>
                    <p className="leftHeroTitle">
                        Hello , I'm Eng.Arthur
                    </p>
                    <p className="leftHeroDesc">
                        I am a software engineer with a lot of skills, Reach out
                        if you would like to know more about me !
                    </p>
                    <div className="contact">
                        <a href="mailto:arthursattah@gmail.com">Contact Me</a>
                    </div>
                </AnimationFromLeft>
            </div>
            <div className="rightHero">
                <AnimationFromRight>
                <div className='rightHeroImage'>
                    <ImageComponent
                        alt="personal-image"
                        src={require('../../assets/hero/ArthurSattah.jpg')}
                        smallSrc={require("../../assets/hero/ArthurSattah-small.jpg")} />

                </div>
                </AnimationFromRight>
            </div>
            <div className="topHero"></div>
            <div className="downHero"></div>
        </section >
    )
}

export default Hero
