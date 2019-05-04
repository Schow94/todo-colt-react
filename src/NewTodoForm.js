import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './NewTodoForm.css';

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addItem({ ...this.state, id: uuid(), completed: false });
    this.setState({
      input: ''
    });
  }

  render() {
    return (
      <div>
        <form className="NewTodoForm" onSubmit={this.handleSubmit}>
          <label htmlFor="input">Add New Todo</label>
          <input
            onChange={this.handleChange}
            id="input"
            placeholder="Add New Todo"
            type="text"
            name="input"
            value={this.state.input}
          />
          <button>Add New Item</button>
        </form>
      </div>
    );
  }
}
