import React from "react";
import Home from "./pages/home";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./pages/register";
import Admin from "./pages/admin";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";

const App: React.FC = () => {
  // const cleanTypeName = new ApolloLink((operation, forward) => {
  //   if (operation.variables) {
  //     const omitTypename = (key: string, value: string) => (key === '__typename' ? undefined : value);
  //     operation.variables = JSON.parse(JSON.stringify(operation.variables), omitTypename);
  //   }
  //   return forward(operation).map((data) => {
  //     return data;
  //   });
  //   });

  const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache({
      addTypename: false,
      resultCaching: false,
      typePolicies: {
        getLinks: {
          merge: false,
        },
      },
    }),
    assumeImmutableResults: false,
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
