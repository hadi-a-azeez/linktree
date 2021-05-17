import React from "react";
import Home from "./pages/home";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/register";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default App;
