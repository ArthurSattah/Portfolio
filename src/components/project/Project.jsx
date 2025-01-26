import React, { useState } from 'react';
import projects from '../../data/projects.json';
import './project.css';
const Project = () => {
    const [number, setNumber] = useState(0);
    return (
        <section className="containerPro" id="projects">
            <h1 className='titlePro'>
                Projects
            </h1>
            <div className="contentPro">
                <div className="leftPro">
                    {projects.map((project, id) => {
                        return (
                            <img key={id} className={`${id === number ? "selected" : ""} leftProImg`}
                                src={require(`../../assets/${project.imageSrc}`)} alt={project.title} onClick={() => { setNumber(id) }} />
                        );
                    })}
                </div>
                <div className="rightPro">
                    {projects.map((project, id) => {
                        return (
                            <div className={id === number ? "card" : "notSelected"} key="id">
                                <img src={require(`../../assets/${project.imageSrc}`)} alt={project.title} className='cardImg' />
                                <div className="cardTalk">
                                    <div className="cardTitle">{project.title}</div>
                                    <div className="cardDesc">{project.description}</div>
                                    <div className='cardSkills'>
                                        {project.skills.map((skill, id) => {
                                            return (
                                                <div className="cardSkill" key={id}>
                                                    {skill}
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className='cardLinks'>
                                        {
                                            project.title === "Travel Advisor" ? <></> :
                                                <a href={project.demo} className="cardItem" target="_blank">
                                                    Try It
                                                </a>
                                        }

                                        <a href={project.source} className="cardItem" target="_blank">
                                            Source Code
                                        </a>

                                    </div>

                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Project
