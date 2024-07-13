import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
const token = localStorage.getItem('token');

export default function useUsers() {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await axiosSecure.get('/users');
      return await response.data;
    },
  });

  return [users, refetch];
}
