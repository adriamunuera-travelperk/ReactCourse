import React, {Component} from 'react'


class NewTodoForm extends Component {
  static defaultProps = {
    headerText: 'New TODO',
    buttonText: 'Add TODO',
    text: ''
  }

  state = {text: this.props.text}

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmitCallback(this.state.text)
    this.setState({text: ''})
  }

  onChange = (e) => {
    this.setState({text: e.target.value})
  }

  render() {
    return (<div>
              <form onSubmit={this.onSubmit}>
                <label htmlFor='newTodo'> this.props.headerText </label>
                <input name='newTodo' onChange={this.onChange} value={this.state.text}/>
                <button>this.props.buttonText</button>
              </form>
            </div>)
  }
}

export default NewTodoForm
