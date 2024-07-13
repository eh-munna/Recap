import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <div>Loading...</div>;

  if (user) {
    return children;
  }
  return <Navigate to="/log-in" state={{ from: location }} replace={true} />;

  // return navigate('/log-in', { state: { from: location } });
}
