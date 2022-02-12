import React, { Component } from "react";
import {BrowserRouter as Router,Link,Route, Routes} from "react-router-dom"
import withNavigation from "./WithNavigation"
import AuthenticatedRoute from "./AuthenticatorRoute";
import Header from "./Header";
import Footer from "./Footer";
import TodoList from "./TodoList";
import LoginComponent from "./LoginComponent";
import LogoutComponent from "./LogoutComponent";
import withParams from "./WithParams";

class TodoApp extends Component{
    render(){
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams=withParams(Welcome);
        const HeaderComponentWithNavigation = withNavigation(Header);
        return(
            <div className="TodoApp">
                <Router>
                    <HeaderComponentWithNavigation/>
                        <Routes>
                            
                            <Route path="/" element={<LoginComponentWithNavigation/>}/>    
                            <Route path="/login" element={<LoginComponentWithNavigation/>}/>
                            <Route path="/welcome/:name" element=   {  <AuthenticatedRoute>
                                                                            <WelcomeComponentWithParams />
                                                                        </AuthenticatedRoute>
                                                                    }/>
                            <Route path="/todolist" element={<TodoList/>}/>
                            <Route path="*" element={<ErrorComponent/>}/>
                            <Route path="/logout" element={<LogoutComponent/>}/>
                            
                        </Routes>
                   <Footer/>
                </Router>
            </div>
        )
    }
}



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
  
function ErrorComponent(){
    return <>URL is not Valid</>
}

export default TodoApp