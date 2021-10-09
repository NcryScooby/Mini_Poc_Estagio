import React, { Component } from "react";

export default class MostrarNome extends Component {
  render() {
    return (
      <div className="mostrarnome">
        <p>{this.props.message}</p>
      </div>
    );
  }
}