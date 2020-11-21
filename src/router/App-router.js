import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import Provider from "../HOCs/Provider";
import Details from "../page/Details";
import Home from "../page/Home";

const AppRouter = () => (
  <Provider>
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/details" component={Details} />
      </Switch>
    </Router>
  </Provider>
);

export default AppRouter;
