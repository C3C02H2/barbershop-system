import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

const ProtectedRoute = ({ children }) => {
  const context = useAuth();
  
  if (!context) {
    console.error("Auth context is undefined!");
    return <Navigate to="/admin/login" />;
  }
  
  const { currentUser, loading } = context;

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!currentUser) {
    return <Navigate to="/admin/login" />;
  }

  return children;
};

export default ProtectedRoute; 