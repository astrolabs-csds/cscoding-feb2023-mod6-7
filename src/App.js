import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen.js';
import PricingScreen from './PricingScreen.js';
import SignInScreen from './SignInScreen.js';
import TemplateRoute from './TemplateRoute.js';
import RegistrationScreen from './RegistrationScreen.js';
import LoginScreen from './LoginScreen.js';

function App() {
  return (
    <React.Fragment>
        <BrowserRouter>
          <Switch>
            <TemplateRoute path="/" exact={true} component={HomeScreen} />
            <TemplateRoute path="/pricing" exact={true} component={PricingScreen} />
            <TemplateRoute path="/login" exact={true} component={LoginScreen} />
            <TemplateRoute path="/register" exact={true} component={RegistrationScreen} />
          </Switch>
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;