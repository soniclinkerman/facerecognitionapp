import React from "react"
import "./ImageLinkForm.scss"
const ImageLinkForm = () => {
    return(
        <div className="image-link-form">
            <div>
            <p>
                This app can detect faces!
            </p>

            <div className="form">
                <input type="text" className="input" placeholder="Enter image link here"/>
                <button className="primary">Detect</button>
            </div>
            </div>

        </div>
    )
}

export default ImageLinkForm
