import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

export default function useCart() {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: cart = [], refetch } = useQuery({
    // queryKey: ['cart', user?.email],
    queryKey: ['cart', user?.email],
    enabled: !loading,
    queryFn: async () => {
      const response = await axiosSecure.get(`/carts?email=${user?.email}`);
      return await response.data;
    },
  });
  return [cart, refetch];
}
