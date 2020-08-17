import React from "react"

const Register = ({onRouteChange}) => {
    return(
        <div>
            <form className="register">
                <input type="text" placeholder="name"/>
                <input type="text" placeholder="email"/>
                <input type="text" placeholder="username "/>
                <input type="text" placeholder="password"/>
                <input type="submit" value="Register" onClick={()=> onRouteChange("register")} />
            </form>
            
        </div>
    )

}

export default Register
