import React from "react"
import "./FaceRecognition-styles.scss"

const FaceRecognition = ({image, box}) => {
    return(
        <div className="face-recognition">
            <div style={{position: "absolute"}}>
            <img id="inputimage" src={image} alt="face" />
            <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, left: box.leftCol, bottom: box.bottomRow }}></div>
            </div>
        </div>

    )
}

export default FaceRecognition
