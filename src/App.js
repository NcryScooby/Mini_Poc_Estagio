import React, { Component } from "react";
import Header from "./components/Header";
import MostrarNome from "./components/MostrarNome";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }

  handlerChange = (e) => {
    let message =
      e.target.value === "" ? "" : "Seja bem vindo, " + e.target.value + "!";
    this.setState({ ...this.state, message: message });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="input">
          <input
            type="text"
            placeholder="Qual seu nome?"
            onChange={this.handlerChange}
            className="digitar"
          />
        </div>
        <MostrarNome message={this.state.message} />
      </div>
    );
  }
}

export default App;
