import React from 'react';
import { Route, redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { currentUser } = useAuth();
  return currentUser ? (
    <Route {...rest}>{props => <Element {...props} />}</Route>
  ) : (
    redirect('/')
  );
};

export default PrivateRoute;
