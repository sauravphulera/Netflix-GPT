import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
	console.log(children);
	const userAuthenticated = true;
	return (
		userAuthenticated ? <Outlet /> : <Navigate to="/" />
	)
}
