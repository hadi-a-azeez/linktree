import React from "react";
import Home from "./pages/home";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/register";
import Admin from "./pages/admin";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const App: React.FC = () => {
  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <Router>
      <Switch>
        <ApolloProvider client={client}>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/admin" component={Admin} />
        </ApolloProvider>
      </Switch>
    </Router>
  );
};

export default App;
