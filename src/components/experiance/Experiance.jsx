import React from 'react'
import skills from "../../data/skills.json";
import histories from "../../data/history.json";

import AnimationFromLeft from '../framerMotion/animationFromLeft/AnimationFromLeft';
import AnimationFromRight from '../framerMotion/animationFromRight/AnimationFromRight';
import './experiance.css'
const Experiance = () => {
    return (
        <section className="containerExp" id="experiance">
            <AnimationFromLeft>
                <h1 className='titleExp'>
                    Experience
                </h1>
            </AnimationFromLeft>
            <div className="contentExp">
                <div className="leftExp">
                    <AnimationFromLeft>
                        {skills.map((skill, id) => {
                            return (
                                <div key={id} className='skillItem'>
                                    <img src={require(`../../assets/${skill.ImageSrc}`)} alt={skill.title} />
                                    <div>{skill.title}</div>
                                </div>
                            );
                        })}
                    </AnimationFromLeft>
                </div>
                <div className="rightExp">
                    <AnimationFromRight>
                        {histories.map((his, id) => {
                            return (
                                <div key={id} className='expItem'>
                                    <img src={require(`../../assets/${his.ImageSrc}`)} alt={his.role} />
                                    <div>
                                        <div className="hisRole">{his.role},{his.organization}</div>
                                        <div className="hisDate">{his.startDate}-{his.endDate}</div>
                                        <ul>
                                            {his.experiences.map((exp, id) => {
                                                return (
                                                    <li key={id} className='experianceItem'>
                                                        {exp}
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>

                                </div>
                            );
                        })}
                    </AnimationFromRight>
                </div>
            </div>

        </section>
    )
}

export default Experiance
