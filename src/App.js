import React, { Component } from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    };
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) {
      return <h1>"Error Message: Something went wrong</h1>;
    } else {
      return (
        <div className="App">
          <StudentForm />
        </div>
      );
    }
  }
}

export default App;
