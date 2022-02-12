import React , { Component } from "react";
import PropTypes from 'prop-types'
import './Counter.css';



//Using Contructor to initialize counter =0
//Bindind this with increment function


class Counter extends Component{

    constructor() {
        super();
    
        this.state={
            counter:0,
            
        }
    
        this.increment=this.increment.bind(this);
    
    }


    render(){
        // render=()=>{
        return(
            <div className="counter">
                <button onClick={this.increment}>+{this.props.by}</button>
                <span className="count" >{this.state.counter}</span>
            </div>
        );
    }



    increment(){
        // console.log('Increment');

        this.setState({
            counter: this.state.counter+this.props.by
        })
    }
    
}
Counter.defaultProps = {
    by : 1
}

Counter.propTypes = {
    by : PropTypes.number
}


export default Counter;