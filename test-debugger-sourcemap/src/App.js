import "./App.css";

import React, { Component } from "react";
import Comp from "./Comp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-heading App-flex">
          <h2>
            Welcome to <span className="App-react">React</span>
          </h2>
        </div>
        <div className="App-instructions App-flex">
          <img className="App-logo" src={require("./react.svg")} />
          <p>
            Edit <code>src/App.js</code> and save to hot reload your changes.
          </p>
          <Comp />
        </div>
      </div>
    );
  }
}

export default App;
