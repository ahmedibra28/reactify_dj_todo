import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, getTodos } from "../actions/todoActions";
import PropTypes from "prop-types";

import { withFormik, Form, Field } from "formik";
import * as yup from "yup";

class TodoInput extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
  };

  render() {
    const { errors, touched, isSubmitting } = this.props;

    return (
      <div className="text-center mt-4">
        <Form className="row gy-2 gx-3 align-items-center justify-content-center">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="input-group">
              <div className="input-group-text btn-info">
                <i className="fas fa-save"></i>
              </div>
              <Field
                type="text"
                className="form-control text-capitalize"
                placeholder="Add Todo Item"
                name="title"
              />
            </div>
            <div className="text-danger">
              {touched.title && errors.title && errors.title}
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12">
            <button
              type="submit"
              className="btn btn-primary form-control"
              disabled={isSubmitting}
            >
              <i className="fas fa-plus"> </i> Add
            </button>
          </div>
        </Form>
      </div>
    );
    // let arr = this.props.handleUpdate;
  }
}

const FormikTodoInput = withFormik({
  mapPropsToValues({ title }) {
    return {
      title: title || "",
    };
  },
  validationSchema: yup.object({
    title: yup.string().min(3).max(40).required("Title field is required"),
  }),
  handleSubmit(values, { props, setErrors, setSubmitting, resetForm }) {
    setTimeout(() => {
      const todoArray = props.todos.filter((todo) => {
        return todo.title.toLowerCase() === values.title.toLowerCase();
      });
      if (todoArray.length === 0) {
        props.addTodo(values);
        resetForm();
        alert("Oh look, an alert!");
      } else {
        setErrors({ title: `${values.title} is already in the database` });
      }
      setSubmitting(false);
    }, 2000);
  },
})(TodoInput);

const mapStateToProps = (state) => ({
  todos: state.todos.todos,
});

export default connect(mapStateToProps, { addTodo, getTodos })(FormikTodoInput);
