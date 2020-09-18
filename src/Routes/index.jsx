import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import routes from './routes';

import PublicRoute from './PublicRoute';
import PageNotFound from '../pages/PageNotFound';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, i) => {
          return <PublicRoute key={i} {...route} />;
        })}
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
