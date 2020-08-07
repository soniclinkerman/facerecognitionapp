import React from "react"
import "./Navigation-styles.scss"

const Navigation = ({onRouteChange}) => {
    return(
            <li className="nav-item"><a href="/" className="sign-out" onClick={()=> onRouteChange("signin")}>Sign Out</a></li>
    )
}

export default Navigation
