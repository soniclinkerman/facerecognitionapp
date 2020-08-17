import React from "react"
import "./SignIn-styles.scss"
import { Component } from "react"

class SignIn extends Component{ 
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            info: ""
        }
}

    onEmailChange = (e) => {
        this.setState({email: e.target.value})
    }

    onPasswordChange = (e) =>{
        this.setState({password: e.target.value})
    }

    onSubmitSignIn = (event) =>{
        event.preventDefault()
        fetch("http://localhost:3000/signin",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data === "success"){
                this.props.onRouteChange("home")
            }
            else{
                this.setState({info: <p>Wrong credentials, please try again</p>})
                
            }
        })
    }

    render(){
        const {onRouteChange} = this.props

        return(
            <form className="signin">
                <input type="text" placeholder="username" onChange={this.onEmailChange}/>
                <input type="text" placeholder="password" onChange={this.onPasswordChange}/>

                <input type="submit" value="Sign In" onClick={this.onSubmitSignIn} />

                <input type="submit" value="Register" onClick={()=> onRouteChange("register")} />
                {this.state.info}
            </form>
        )
    }

}

export default SignIn
