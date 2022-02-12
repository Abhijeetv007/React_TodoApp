import React, { Component } from "react";


class TodoList extends Component{
    constructor(props){
        super(props);

        this.state={
            todos:[
                {id:1, desc:"Learn Docker",isDone:false,targetDate:new Date()},
                {id:2, desc:"Learn Kubernetes",isDone:false,targetDate:new Date()}
            ]
        }
    }
    
    render(){
        return(
            <div>
                <h1>TodoList</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                            <th>IsDone</th>
                            <th>TargetDate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo=>
                                <tr>
                                    <td>{todo.id}</td>
                                    <td>{todo.desc}</td>
                                    <td>{todo.isDone.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                            )
                            
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TodoList