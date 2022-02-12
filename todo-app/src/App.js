import React, { Component } from 'react';
import FirstComponent from './components/learning/FirstComponent';
import SecondComponent from './components/learning/SecondComponent';
import FunctionComponent from './components/learning/FunctionComponent';
import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp';
import './bootstrap.css';
import logo from './logo.svg';
import './App.css';

 
class App extends Component {
  render() {
    return (
      <div className="App">
        
        <TodoApp></TodoApp>

        {/* <Counter by ={1} />
        <Counter by ={5} />
        <Counter by ={10} />   */}
      </div>
      
    );
  }
}

class Learning extends Component{
  render() {
    return (
      <div className="App">
        Hello React..
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <FunctionComponent></FunctionComponent>
      </div>
      
    );
  }
}


export default App;
