import React from 'react';
import { Route, BrowserRouter,Switch } from 'react-router-dom';

// Configure routes
import Home from './screens/home';
import Book from './screens/book';

export default (
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/book/:ID" component={Book}/>
  </Switch>
  </BrowserRouter>
);
