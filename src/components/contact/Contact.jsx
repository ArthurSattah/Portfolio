import React, { useCallback } from 'react';
import './contact.css';
import AnimationFromLeft from '../framerMotion/animationFromLeft/AnimationFromLeft';
import AnimationFromRight from '../framerMotion/animationFromRight/AnimationFromRight';

const Contact = ({ innerRef, otherRef }) => {

    const combinedRef = useCallback((node) => {
        otherRef(node);
        if (innerRef) innerRef.current = node;
    },
        [otherRef, innerRef]
    );

    return (
        <footer className="containerCon" id="contact" ref={combinedRef}>
            <div className="leftCon">
                <AnimationFromLeft>
                    <h1 className='leftTitleCon'>
                        Contact
                    </h1>
                    <h2 className='leftDescCon'>
                        feel free to reach out!
                    </h2>
                </AnimationFromLeft>
            </div>
            <div className="rightCon">
                <AnimationFromRight>
                    <div className="itemCon">
                        <img src={require("../../assets/contact/emailIcon.png")} alt="gmail-icon" />
                        <a className="rightdescCon" href="mailto:arthursattah@gmail.com">arthursattah@gmail.com</a>
                    </div>

                    <div className="itemCon">
                        <img src={require("../../assets/contact/linkedinIcon.png")} alt="linkedin-icon" />
                        <a className="rightdescCon" href="https://www.linkedin.com/in/arthur-sattah-858217264/">linkedin.com/ArthurSattah</a>
                    </div>

                    <div className="itemCon">
                        <img src={require("../../assets/contact/whatsappIcon.png")} alt="whatsapp-icon" />
                        <a className="rightdescCon" href="https://wa.me/963937928687">Say Hi</a>
                    </div>
                </AnimationFromRight>

            </div>
        </footer>
    )
}

export default Contact
