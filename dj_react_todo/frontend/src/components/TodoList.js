import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTodos, deleteTodo } from "../actions/todoActions";

class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    getTodos: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getTodos();
  }
  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="mt-4 ">
        <h3 className="text-center">Todo List Items</h3>
        <form
          className="row gy-2 gx-3 align-items-center justify-content-center"
          onSubmit={this.handleSubmit}
        >
          <div className="col-lg-8 col-md-8 col-sm-12">
            {this.props.todos.map((todo) => {
              return (
                <div
                  className="d-flex bd-highlight shadow-lg mb-1 bg-light.bg-gradient rounded"
                  id={todo.id % 2 == 0 ? "orange" : "green"}
                  key={todo.id}
                >
                  <div className="p-2 flex-grow-1 bd-highlight text-capitalize">
                    {todo.title}
                  </div>
                  <div className="p-1 bd-highlight">
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => this.props.handleEdit(todo)}
                    >
                      <i className="fas fa-pen"></i>
                    </button>
                  </div>
                  <div className="p-1 bd-highlight">
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        window.confirm(
                          "Are you sure you wish to delete this item?"
                        )
                          ? this.props.deleteTodo(todo.id)
                          : null
                      }
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12">
            <button type="submit" className="btn btn-danger form-control">
              <i className="fas fa-eraser"> </i> Clear All
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  todos: state.todos.todos,
});
export default connect(mapStateToProps, { getTodos, deleteTodo })(TodoList);
