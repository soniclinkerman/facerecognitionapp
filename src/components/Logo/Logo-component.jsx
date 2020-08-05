import React from "react"
import "./Logo-styles.scss"

const Logo = ({logo}) => {
    return(
        <div className="logo">
            <img className="logo-img" src={logo} alt="logo"/>
        </div>
    )
}

export default Logo
