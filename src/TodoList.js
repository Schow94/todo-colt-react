import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import uuid from 'uuid/v4';
import './TodoList.css';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { input: 'Eat', id: uuid(), completed: false },
        { input: 'Sleep', id: uuid(), completed: true }
      ]
    };
    this.renderItems = this.renderItems.bind(this);
    this.addItem = this.addItem.bind(this);
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  delete(id) {
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    });
  }

  edit(id, updatedItem) {
    const updatedTodos = this.state.items.map(item => {
      if (item.id === id) {
        return { ...item, input: updatedItem };
      }
      return item;
    });
    this.setState({
      items: updatedTodos
    });
  }

  toggleCompletion(id) {
    const completedTodos = this.state.items.map(item => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    this.setState({ items: completedTodos });
  }

  renderItems() {
    return this.state.items.map(item => (
      <Todo
        edit={this.edit}
        delete={this.delete}
        input={item.input}
        key={item.id}
        id={item.id}
        completed={item.completed}
        toggleCompletion={this.toggleCompletion}
      />
    ));
  }

  addItem(item) {
    this.setState(() => ({
      items: [...this.state.items, item]
    }));
  }

  render() {
    return (
      <div className="TodoList">
        <h1>
          Todo List!<span>A Simple React Todo List App</span>
        </h1>
        <NewTodoForm addItem={this.addItem} />
        {this.renderItems()}
      </div>
    );
  }
}
