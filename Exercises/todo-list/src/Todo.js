import React, {Component} from 'react'
import NewTodoForm from './NewTodoForm.js'
import './App.css'

class Todo extends Component {
  state = {text: this.props.text, isCompleted: false, isEditing: false}

  switchIsCompleted = () => this.setState({isCompleted: !this.state.isCompleted})
  switchIsEditing = () => this.setState({isEditing: !this.state.isEditing})

  deleteTodoHandler = () => this.props.deleteTodo(this.props.index)
  modifyTodoHandler = (text) => {
    this.props.editTodo(this.props.index, text)
    this.switchIsEditing()
  }


  render() {
    if (!this.state.isEditing) {
      const strikeThrough = {textDecoration: this.state.isCompleted? 'line-through' : 'none'}
      return(<div onClick={this.switchIsCompleted} className={'todo'}>
              <p style={strikeThrough} className={'todoText'}>
                {this.props.text}
              </p>
              <button
                onClick={this.deleteTodoHandler}
                className={'deleteButton'}
              >
                delete
                </button>
                <button
                  onClick={this.switchIsEditing}
                  className={'editButton'}
                >
                  edit
                  </button>
            </div>)
    } else {
      return <NewTodoForm
                onSubmitCallback={this.modifyTodoHandler}
                headerText='Modify TODO'
                buttonText='Edit TODO'
                text={this.state.text}
              />
    }
  }
}

export default Todo
