import { withAlert } from "react-alert";

import React, { Component } from "react";

export default class Alerts extends Component {
  componentDidMount() {
    alert.show("Oh look, an alert!");
  }
  render() {
    return <div></div>;
  }
}

export default withAlert()(Alerts);
