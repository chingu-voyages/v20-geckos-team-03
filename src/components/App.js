import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../styles/App.css";
import Home from "./Home";
import ProductPage from "./ProductPage/ProductPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/product:id" component={ProductPage} />
      </Router>
    </div>
  );
}

export default App;
