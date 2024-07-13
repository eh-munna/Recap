/* import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

export default function useAdmin() {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ['isAdmin', user?.email],
    enabled: !loading,
    queryFn: async () => {
      // fetch admin status from backend
      const response = await axiosSecure.get(`/users/admin/${user?.email}`);
      const { data } = await response;
      return data?.admin;
    },
  });
  return [isAdmin, isAdminLoading];
}
 */

import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

export default function useAdmin() {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ['isAdmin', user?.email],
    enabled: !loading && !!user,
    queryFn: async () => {
      const response = await axiosSecure.get(`/users/admin/${user?.email}`);
      const { data } = response;
      // Logging
      return data?.admin;
    },
  });
  return [isAdmin, isAdminLoading];
}
