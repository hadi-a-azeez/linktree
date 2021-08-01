import React from "react";
import Home from "./pages/home";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/register";
import Admin from "./pages/admin";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <DndProvider backend={HTML5Backend}>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/admin" component={Admin} />
        </DndProvider>
      </Switch>
    </Router>
  );
};

export default App;
