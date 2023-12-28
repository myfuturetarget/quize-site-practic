import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const RedirectElement2 = ({ children }) => {
  const { currentUser } = useAuth();
  // console.log(currentUser);
  return !currentUser ? children : <Navigate to="/" />;
};

export default RedirectElement2;
