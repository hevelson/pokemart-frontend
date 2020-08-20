import React from 'react';

import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, groups, user, ...rest }) => {

  const { isAuth, group } = user;
  const permited = groups.includes(group);

  return (
    <Route
      {...rest}
      render={props => {
        if (isAuth) {
          if (permited) {
            return (
              <Component {...props} />
            );
          } else {
            return <Redirect to={{ pathname: '/401', state: { from: props.location } }} />;
          }
        } else {
          return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
        }
      }}
    />
  );
};

export default PrivateRoute;
