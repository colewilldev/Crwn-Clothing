import React from "react";
import { Route, Switch } from "react-router";

import "./App.css";
import "./pages/homepage/homepage.component";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route exact={true} path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
