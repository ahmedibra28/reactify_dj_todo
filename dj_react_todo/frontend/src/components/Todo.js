import React, { Component } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default class Todo extends Component {
  state = { todos: [] };
  handleEdit = (e) => {
    this.setState({ todos: e });
  };
  render() {
    return (
      <div>
        <TodoInput handleUpdate={this.state.todos} />
        <TodoList handleEdit={this.handleEdit} />
      </div>
    );
  }
}
