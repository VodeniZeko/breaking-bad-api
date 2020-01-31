import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Container from "./components/Container";

const App = () => {
  return (
    <div className="App">
      <Route>
      <Container />
      </Route>
    </div>
  );
};

export default App;
