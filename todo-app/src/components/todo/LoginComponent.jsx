import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService.js";



class LoginComponent extends Component{

    constructor(props){
        super(props);

        this.state={
            username:'Abhijeet',
            password:'',
            loginSuccess:false,
            loginFailed:false
        }

        this.genericHandler=this.genericHandler.bind(this)
        this.clickedButton=this.clickedButton.bind(this)
        // this.usernameHandler=this.usernameHandler.bind(this)
        // this.passwordHandler=this.passwordHandler.bind(this)
    }

    genericHandler(event){
        
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
        console.log(this.state);
    }

    clickedButton(event){

        if(this.state.username==='Abhijeet' && this.state.password==='abhi')
        {
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
            this.props.navigate(`/welcome/${this.state.username}`)
            // console.log('SuccessFul')
            // this.setState({loginSuccess:true})
        }
        else
        {
            console.log('Failed')
            this.setState({loginFailed:true})
            this.setState({loginSuccess:false})

        }
    }

    // usernameHandler(event){
    //     console.log(event.target.value);
    //     this.setState({username:event.target.value})
    // }
    // passwordHandler(event){
    //     console.log(event.target.value);
    //     this.setState({password:event.target.value})
    // }

    render(){
        return (
            <div className="form-control">
                
                UserName: <input type="text" name="username" value={this.state.username} onChange={this.genericHandler}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.genericHandler}/>
                <button onClick={this.clickedButton} className="btn btn-primary active">Login</button>
                
                {/* <SuccessfulCredential loginSuccess={this.state.loginSuccess}/> */}
                {/* <FailedCredential loginFailed={this.state.loginFailed} /> */}
                {this.state.loginSuccess && <div>Successful Login</div>}
                {this.state.loginFailed && <div>Invalid Credentials Login</div>}
            </div>
        )
    }
}

// function SuccessfulCredential(props){
//     if(props.loginSuccess===true)
//     {
//         return <div>Successful Login</div>
//     }
//     return null
// }   

// function FailedCredential(props){
//     if(props.loginFailed===true)
//     {
//         return <div>Invalid Credentials Login</div>
//     }
//     return null;
// }
export default LoginComponent