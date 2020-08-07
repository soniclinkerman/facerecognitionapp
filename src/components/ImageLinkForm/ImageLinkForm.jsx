import React from "react"
import "./ImageLinkForm.scss"
const ImageLinkForm = ({onChange, onClick}) => {
    return(
        <div className="image-link-form">
            <div>
                <div className="form">
                    <p className="form-title">
                        This app can detect faces!
                    </p>
                    <input onChange={onChange} type="text" className="input" placeholder="Enter image link here"/>
                    <button className="primary" onClick={onClick}>Detect</button>
                </div>
                </div>

        </div>
    )
}

export default ImageLinkForm
