import React, { Component } from "react";
import ReactDOM from "react-dom";
import Todo from "./Todo";
import { Provider } from "react-redux";
import { store } from "../store";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
// import Alerts from "./Alerts";

// import Learn from "./Learn";

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
          <div className="container">
            {/* <Alerts /> */}
            {/* <Learn /> */}
            <Todo />
          </div>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
