import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';

export default function AdminRoute({ children }) {
  const { user, loading, logOutUser } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <div>Loading...</div>;
  }
  if (user && isAdmin) {
    return children;
  }

  // if (user && !isAdmin) {
  //   // Log out user if not an admin
  //   logOutUser().then(() => {
  //     return <Navigate to="/log-in" state={{ from: location }} replace />;
  //   });
  // }
  return <Navigate to="/" state={{ from: location }} replace={true} />;
}
