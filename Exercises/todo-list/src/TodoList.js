import React, {Component} from 'react'
import Todo from './Todo.js'
import NewTodoForm from './NewTodoForm.js'

import { v4 as uuid } from 'uuid';


class TodoList extends Component {
  state = {todos: ['Pick up fruits', 'Build a car', 'Read']}

  addTodo = (text) => this.setState({todos: [...this.state.todos, text]})

  deleteTodo = (index) => {
    let todos = this.state.todos
    todos = [...todos.slice(0,index), ...todos.slice(index+1)]
    this.setState({todos})
  }

  editTodo = (index, text) => {
    let todos = this.state.todos
    todos = [...todos.slice(0,index), text, ...todos.slice(index+1)]
    this.setState({todos})
  }

  render() {
    return(<div>
            <h1>TODO LIST</h1>
            <ul>
            {this.state.todos.map((text, index) =>
              <li>
                <Todo
                  key={uuid()}
                  text={text}
                  index={index}
                  deleteTodo={this.deleteTodo}
                  editTodo={this.editTodo}
                />
              </li>
              )
            }
            </ul>
            <NewTodoForm onSubmitCallback={this.addTodo}/>
          </div>)
  }
}

export default TodoList
