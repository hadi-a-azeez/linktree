import React from "react";
import Home from "./pages/home";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/register";
import Admin from "./pages/admin";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";

const App: React.FC = () => {
  const isMobile = window.innerWidth < 600;
  return (
    <Router>
      <Switch>
        <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/admin" component={Admin} />
        </DndProvider>
      </Switch>
    </Router>
  );
};

export default App;
