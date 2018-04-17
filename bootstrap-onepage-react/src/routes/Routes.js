import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Start } from "../components/start/Start";
import { PageNotFound } from "./PageNotFound";

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Start} />
      <Route path="" component={PageNotFound} />
    </Switch>
  </Router>
);
