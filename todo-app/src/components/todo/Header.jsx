import React, { Component } from "react";
import {BrowserRouter as Router,Link,Route, Routes} from "react-router-dom"
import AuthenticationService from "./AuthenticationService.js";

class Header extends Component{
    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="navbar-brand">Todo</div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn &&  <li><Link className="nav-link" to="/welcome/:Abhijeet">Home</Link></li>}
                        {isUserLoggedIn &&  <li><Link className="nav-link" to="/todolist">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {isUserLoggedIn &&  <li><Link className="nav-link" to="/">Login</Link></li>}
                        {isUserLoggedIn &&  <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header