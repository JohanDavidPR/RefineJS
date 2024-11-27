import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export const Private = () => {
    const isLogged = false;
  return isLogged ? <Outlet /> : <Navigate to="/login" />;
}