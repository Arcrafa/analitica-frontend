import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from '../Pages/Login';
import Home from '../Pages/Home';

function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/Home" component={Home} />
      
    </Switch>
    </BrowserRouter>
  );
}

export default Routes;
