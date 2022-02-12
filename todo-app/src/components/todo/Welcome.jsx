import React, { Component } from "react";
import {BrowserRouter as Router,Link,Route, Routes} from "react-router-dom"

class Welcome extends Component{
    render(){
      return (
        <div>
            Welcome Page {this.props.params.name}<br/>
            Goto todolist <Link to="/todolist">click here</Link>
        </div>
      )
    }
  }
export default Welcome