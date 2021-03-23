import React from "react";
import { Route, Switch } from "react-router";

import "./App.css";
import { Header } from "./components/header/header.component";
import "./pages/homepage/homepage.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { SiginAndSignUpPage } from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route exact={true} path='/hats' component={HatsPage} />
        <Route exact={true} path='/shop' component={ShopPage} />
        <Route exact={true} path='/signin' component={SiginAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
