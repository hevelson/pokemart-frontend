import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import routes from './routes';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, i) => {
          if (route.auth) {
            return <PrivateRoute key={i} {...route} />;
          }

          return <PublicRoute key={i} {...route} />;
        })}

        {/* <Route component={Page404} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
