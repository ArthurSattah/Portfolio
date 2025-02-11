import React, { useState } from 'react'
import './imageComponent.css'
const ImageComponent = ({ alt, src, smallSrc }) => {

    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <div className="imageComponentContainer">
            <img
                className="imageComponentImage"
                style={{ display: !isLoaded ? "block" : "none" }}
                src={smallSrc}
                alt={`small-${alt}`}>
            </img>

            <img
                className="imageComponentImage"
                style={{ display: isLoaded ? "block" : "none" }}
                src={src}
                alt={`${alt}`}
                onLoad={() => setIsLoaded(true)}>

            </img>
        </div>
    )
}

export default ImageComponent
