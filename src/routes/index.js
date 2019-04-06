import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Feed from '../pages/Feed';
import PlantDetails from '../pages/PlantDetails';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/feed" component={Feed} />
      <Route exact path="/detail" component={PlantDetails} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
