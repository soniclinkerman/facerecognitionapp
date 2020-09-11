import React from "react"
import { Component } from "react"

class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            name: "",
            username: "",
        }
    }

    onSubmitRegister = (event) => {
        event.preventDefault()
        fetch("http://localhost:3000/register", {
            method : "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name,
                username: this.state.username
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user) {
                this.props.loadUser(user)
                this.props.onRouteChange("signin")
            }
        })
       
    }

    onNameChange = (e) => {
        this.setState({name: e.target.value})
    }

    onUserNameChange = (e) => {
        this.setState({username: e.target.value})
    }

    onEmailChange = (e) =>{
        this.setState({email: e.target.value})
    }

    onPasswordChange = (e) =>{
        this.setState({password: e.target.value})
    }

    render(){
        return(
            <div>
                <form className="register">
                    <input onChange={this.onNameChange}type="text" placeholder="name"/>
                    <input onChange={this.onEmailChange}type="text" placeholder="email"/>
                    <input onChange={this.onUserNameChange}type="text" placeholder="username "/>
                    <input onChange={this.onPasswordChange}type="text" placeholder="password"/>
                    <input type="submit" value="Register" onClick={this.onSubmitRegister} />
                </form>
                
            </div>
        )
    }
    
}

export default Register
