import React from 'react'
import skills from "../../data/skills.json";
import histories from "../../data/history.json";
import './experiance.css'
const Experiance = () => {
    return (
        <section className="containerExp" id="experiance">
            <h1 className='titleExp'>
                Experiance
            </h1>
            <div className="contentExp">
                <div className="leftExp">
                    {skills.map((skill, id) => {
                        return (
                            <div key={id} className='skillItem'>
                                <img src={require(`../../assets/${skill.ImageSrc}`)} alt={skill.title} />
                                <div>{skill.title}</div>
                            </div>
                        );
                    })}
                </div>
                <div className="rightExp">
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
                </div>
            </div>

        </section>
    )
}

export default Experiance
