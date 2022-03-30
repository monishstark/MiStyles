import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Switch } from "react-router";
import Checkout from "./Checkout";

import LoginPage from "./LoginPage";
import ViewProduct from "./ViewProduct";
import FloatingButton from "./FloatingButton";
import Popup from "./Popup";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <FloatingButton />
        <Switch>
          <Route path="/helpdesk">
            <Popup />
          </Route>
          <Route path="/loginpage">
            <LoginPage />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
