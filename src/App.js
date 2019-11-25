import React, { Component } from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";
import ErrorBoundary from "./components/ErrorBoundary";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <StudentForm />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
