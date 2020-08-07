import React from "react"
import "./SignIn-styles.scss"

const SignIn = ({onRouteChange}) => {
    return(
        <form className="signin">
            <input type="text" placeholder="username"/>
            <input type="text" placeholder="password"/>
            <input type="submit" value="Sign In" onClick={()=> onRouteChange("home")} />
        </form>
    )
}

export default SignIn
