import React, { useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest }) => {
  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])
  return <Route {...rest} render={props => <Component {...props} />} />;
};

export default PublicRoute;
